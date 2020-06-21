$(document).ready(function(){
	function setRem() {
	  //获取屏幕宽度(页面宽度)
	  let pageWidth = innerWidth;
	  // console.log('pageWidth ==> ', pageWidth);
  
	  //以iphone6为标准屏进行设置rem，设置html的font-size: 100px; 换句话说：在iphone6: 1rem = 100px
	  let baseWidth = 375;
  
	  let fontSize = (pageWidth / baseWidth) * 100;
  
	  // console.log('fontSize ==> ', fontSize);
  
	  document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
	}
  
	setRem();
  
	window.onresize = function () {
	  setRem();
	};
	var current = 0;
	//切换选项卡
	$(".tab").on("click", function () {
	  if ($(this).index() == current) {
	  } else {
		
		$(this).addClass("tab_demo").siblings().removeClass("tab_demo");
		//获取选项卡内容
		let tabContent = document.querySelectorAll(".tabContent_fist_layer");
		$(tabContent[$(this).index()])
		  .css("display", "block")
		  .siblings()
		  .css("display", "none");
  
		current = $(this).index();
	  }
	});
  
	//获取腾讯地图地址api
	function tengxApi() {
	  $.ajax({
		type: "GET",
		url: "https://apis.map.qq.com/ws/location/v1/ip",
		data: {
		  key: "EOKBZ-V56KP-PRUD2-LLC2F-4MTF3-TNB3N",
		  output: "jsonp",
		},
		dataType: "jsonp", //相应数据类型
		success: function (result) {
		  //
		  $(".area_position_text").text(result.result.ad_info.city);
		  console.log("腾讯地址api", result);
		  weatherApi(result.result.ad_info.city);
		},
		error: function (ero) {
		  console.log(ero);
		},
	  });
	}
	tengxApi();
  
	//获取天气api
	function weatherApi(city) {
	  console.log(city);
	  if (city == "") {
		console.log("暂无天气数据");
		return;
	  }
	  $.ajax({
		type: "GET",
		url: "https://api.heweather.net/s6/weather",
		data: {
		  location: city,
		  key: "7df1d54a87a94e44bc8828accd3be254",
		},
		success: function (result) {
		  console.log("天气api", result);
		  //获取now中的数据
		  $(".n").each(function () {
			let id = $(this).attr("id");
			$(this).text(result.HeWeather6[0].now[id]);
		  });
		  //获取daily_forecast中的数据
		  $(".df").each(function () {
			let id = $(this).attr("id");
			let sheshidu = result.HeWeather6[0].daily_forecast[0][id] + "°";
			$(this).text(sheshidu);
		  });
		  //调用minuteApi函数传入经纬度
		  let aa = result.HeWeather6[0].basic;
		  minuteApi(aa.lon, aa.lat);
  
		  //遍历逐日预报
		  day(result.HeWeather6[0].daily_forecast);
  
		  //遍历逐时预报
		  var flag_time = "";
		  var hourly = result.HeWeather6[0].hourly;
		  //
		  for (var i = 0; i < hourly.length; i++) {
			//切割时间
			let str = hourly[i].time.split(" ")[1];
  
			var oli = `<li>
					  <ul class="tabContent_second_layer">
						  <li>${str}</li>
						  <li>${hourly[i].cond_txt}</li>
						  <li class='tabContext_icon'>
						  <img src="./images/icons/${hourly[i].cond_code}.png" style="width:.2rem" />
						  </li>
						  <li>${hourly[i].tmp + "°"}</li>
					  </ul>
				  </li>`;
  
			flag_time += oli;
		  }
		  document.getElementById("time").innerHTML = flag_time;
		  //调用相对湿度进度条
		  round(result.HeWeather6[0].now.hum)
		},
		error: function (ero) {
		  console.log(ero);
		},
	  });
  
	  //获取分钟级降水数据
	  function minuteApi(lon, lat) {
		$.ajax({
		  type: "GET",
		  url: "https://api.heweather.net/s6/weather/grid-minute",
		  data: {
			location: lon + "," + lat,
			key: "7df1d54a87a94e44bc8828accd3be254",
		  },
		  success: (result) => {
			console.log("分钟级降水", result);
			$(".p_nav").text(result.HeWeather6[0].grid_minute_forecast.txt);
		  },
		  error: (ero) => {
			console.log(ero);
		  },
		});
	  }
	}
	//搜索城市
	var search_ipt = document.querySelector(".search_box_ipt");
	var search_icon = document.querySelector(".search_box_icon");
	function searchCity() {
	  if (search_ipt.value == "") {
	  } else {
		//输入的城市名称
		let cityName = search_ipt.value;
		$(".area_position_text").text(cityName);
		weatherApi(cityName);
	  }
	}
	search_icon.onclick = searchCity;
  
	search_ipt.onkeydown = function (k) {
	  if (k.keyCode == 13) {
		searchCity();
	  }
	};
	//获取逐日预报
	function day(daily_fore) {
	  var flag_day = "";
  
	  console.log(daily_fore);
  
	  for (var i = 0; i < daily_fore.length; i++) {
		let cc = parseInt(daily_fore[i].cond_code_d);
		var oli = `<li>
				  <ul class="tabContent_second_layer">
					  <li>${daily_fore[i].date.slice(5, 10)}</li>
					  <li>${daily_fore[i].cond_txt_d}</li>
					  <li class='tabContext_icon'><img src="./images/icons/${cc}.png" style="width:.2rem" /></li>
					  <li>${daily_fore[i].tmp_min + "°"}~${daily_fore[i].tmp_max + "°"}</li>
				  </ul></li>`;
  
		flag_day += oli;
	  }
	  document.getElementById("day").innerHTML = flag_day;
	}
  
	//更改背景颜色
	function changebgc() {
	  
	  let currentTiem = new Date().getHours();
  
	  if (currentTiem >= 6 && currentTiem < 12) {
		$(".main").addClass("morning");
	  } else if (currentTiem >= 12 && currentTiem < 19) {
		$(".main").addClass("day");
	  } else {
		$(".main").addClass("night");
	  }
	}
	changebgc();
  
	//相对湿度进度条
	function round(perc) {
		var aa = document.getElementById('ctx')
		var context = aa.getContext('2d');

		var max = 300;
		var n = 0;//每次增加
		var percent = perc/100;//设定百分比
		context.lineWidth = '5';
		context.lineCap = 'round';



		function fn() {//画圆
			var timer = setInterval(function () {
				if (n >= max * percent) {
					clearInterval(timer)
				} else {
					context.clearRect(aa.width/5, aa.width/5, 50, 50);//清除画布
					context.strokeStyle = 'red'
					context.beginPath();
					context.arc(60, 60, 50, Math.PI / 180 * 120, Math.PI / 180 * (120 + n));
					context.stroke();
					n++
				}
				addText()
			}, 10)

		} fn()

		//加入文字
		function addText() {
			context.fillText(Math.floor(n / max * 100) + '%', 60, 60,);
			context.textAlign = 'center';
			context.textBaseline = 'center';
			context.font = '20px sans-serif';
		}

		//画背景圆
		function bground() {
			context.strokeStyle = '#eee'
			context.beginPath();
			context.arc(60, 60, 50, 120 * Math.PI / 180, 420 * Math.PI / 180)
			context.stroke();
		}
		bground()
	};
	
  })  
