window.onload = function () {
  function query(select) {
    return document.querySelector(select);
  }
  var province = query("#province");
  var city = query("#city");
  var area = query("#area");
  var provinceName = ""; //用来存放省级名字
  //创建元素数据
  function created(element, data) {
    for (let i in data) {
      var opt = document.createElement("option");
      opt.innerHTML = i;
      element.appendChild(opt);
    }
  }
  //得到数据
  function getData(select) {
    var index = select.selectedIndex;

    return select[index].value;
  }

  //遍历省
  created(province, data);

  province.onchange = function () {
    //清空之前的市
    //   if (this.selectedIndex == 0) {
    //     city.innerHTML = '<option value="city">市</option>';
    //   } else {
    // }
    city.innerHTML = '<option value="city">市</option>';
    area.innerHTML = '<option value="area">区/县</option>';
    provinceName = getData(this);
    created(city, data[provinceName]);
  };

  city.onchange = function () {
    //清空之前的区
    if (this.selectedIndex == 0) {
      area.innerHTML = '<option value="area">区/县</option>';
    } else {
      area.innerHTML = "";
    }
    let cityName = getData(this);
    var arr = data[provinceName][cityName];

    arr.forEach(function (item) {
      let opt = document.createElement("option");
      opt.innerHTML = item;
      area.appendChild(opt);
    });
  };

  //
  query(".save").onclick = function () {
    if (
      province.value == "province" ||
      city.value == "city" ||
      area.value == "area"
    ) {
      return;
    } else {
      let content =
        province.value + city.value + area.value + query("textarea").value;
      query(".content").innerHTML = content;
    }
  };
};
