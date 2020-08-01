window.onload = function () {
    var ipt = document.querySelectorAll('.ipt');
    var tips = document.querySelectorAll('.tips');
    var passCodeIpt = document.querySelector('.pcIpt');
    var lastips = document.querySelector('.lastips');
    //验证用户名
    ipt[0].oninput = function () {
        var res = /^[\u4e00-\u9fa5A-Za-z]{2,6}$/;
        var content = ipt[0].value;
        var index = ipt[0].name;
        if (!res.test(content)){
            tips[index].style.display = 'block';
        }else{
            tips[index].style.display = 'none';
        }
    };
    //验证密码
    ipt[1].oninput = function () {
        var res = /^([A-Za-z]|\d){6,12}$/;
        var content = ipt[1].value;
        var index = ipt[1].name;
        if (!res.test(content)){
            tips[index].style.display = 'block';
        }else{
            tips[index].style.display = 'none';
        }
    };
    //验证第二次密码
    ipt[2].oninput = function () {
        var content = ipt[2].value;
        var index = ipt[2].name;
        if (ipt[1].value!=content){
            tips[index].style.display = 'block';
        } else{
            tips[index].style.display = 'none';
        }
    };
    //验证手机号
    ipt[3].oninput = function () {
        var res = /^1[3456789]\d{9}$/;
        var content = ipt[3].value;
        var index = ipt[3].name;
        if (!res.test(content)){
            tips[index].style.display = 'block';
        }else{
            tips[index].style.display = 'none';
        }
    };
    //生成验证码，string.fromCharCode(asc码)
    var arr = [0,1,2,3,4,5,6,7,8,9];
    for (var i=65;i<=122;i++){
        if (i!=91&&i!=92&&i!=93&&i!=94&&i!=95&&i!=96){
            var ar = String.fromCharCode(i);
            arr.push(ar);
        }
    }
    var btn = document.querySelector('.btn');
    var yzmBox = document.querySelector('.yzmBox');
    btn.onclick = function () {
        var num = [];
        for (var i=0;i<4;i++){
            var random = Math.floor(Math.random()*arr.length);
            num.push(arr[random]);
        }
        yzmBox.innerHTML = num.join('');
        var flag = 5;
        function fn() {
            btn.disabled = true;
            btn.innerHTML = flag+'s后再次发送';
            flag--;
            if (flag<0){
                clearInterval(timer);
                flag = 5;
                btn.disabled = false;
                btn.innerHTML = '获取验证码';
            }
        }fn();
        var timer = setInterval(fn,1000)
    };
    //验证验证码框
    passCodeIpt.oninput = function () {
        var yzmContent = yzmBox.textContent;
        if (passCodeIpt.value!=yzmContent){
            lastips.style.display = 'block';
        } else{
            lastips.style.display = 'none';
        }
    };

//判断点击注册时输入框是否为空
    var signIn = document.querySelector('.signIn');
    var check = document.querySelector('.check');
    var fl = false;
    signIn.onclick = function () {
        for (var i=0;i<ipt.length;i++){
            if(ipt[i].value==''){
                fl = true;
            }
        }
        if (passCodeIpt.value==''){
            alert('内容不能为空')
        }else if (fl){
            alert('内容不能为空')
        }
        if(!check.checked){
            alert('请同意注册协议')
        }

    }
};