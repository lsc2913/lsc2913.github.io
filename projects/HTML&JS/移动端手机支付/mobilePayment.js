function Pay(selects) {
    this.ipts = selects.ipt;
    this.payBoxs = selects.payBox;
    this.icons = selects.icon;
    this.td = selects.td;
    this.imgs = selects.img;
    this.rightPw = [6,5,4,3,2,1];//设置正确密码
    this.iptPw = [];//存放输入密码
}
//输入框聚焦显示，
Pay.prototype.foc = function(){
    var _this = this;
    this.ipts.onfocus = function () {
        setTimeout(function () {
            document.documentElement.style.background = '#717171';
        },400);
       $(_this.payBoxs).show(800);
    }
};
//点击叉叉隐藏
Pay.prototype.hdn = function(){
    var _this = this;
    this.icons.onclick = function () {
        document.documentElement.style.background = '#fff';
        $(_this.payBoxs).hide(800);
    }
};
//给键盘绑定点击事件
Pay.prototype.click = function(){
    var _this = this;
    var count = 0;//用来记录点击的次数
    for (var i=0;i<this.td.length;i++){

            this.td[i].onclick = function () {

                if (this.className=='clearAll'){
                    count = 0;
                    _this.iptPw = [];
                    for (var i=0;i<_this.imgs.length;i++){
                        _this.imgs[i].style.display = 'none';
                    }
                    console.log('执行清空')
                } else if(this.className=='del'){
                    if (count===0){
                        return;
                    } else {
                        count--;
                        _this.imgs[count].style.display = 'none';
                        var maxIndex =_this.iptPw.length-1;
                        _this.iptPw.splice(maxIndex,1)
                    }
                    console.log('执行删除')
                }else{
                    if (count<=5){
                        _this.imgs[count].style.display = 'block';
                    }
                    if (count>=6){//判断超过六次就不能输入密码
                        return;
                    } else{
                        count++;
                        _this.iptPw.push(this.innerHTML);
                        console.log(_this.iptPw);
                        if (count==6){//点了六次后在判断密码正确与否

                            _this.isRight();
                        }
                    }
                }
            };
    }
};
//判断密码是否正确
Pay.prototype.isRight = function(){
    for (var i=0;i<this.rightPw.length;i++){
        if(this.rightPw[i]!=this.iptPw[i]){
            console.log('不正确');
            return;
        }
    }
    console.log('正确');
    document.documentElement.style.background = '#fff';
    $(this.payBoxs).hide(800);
    alert('密码正确');

};
//初始化
Pay.prototype.init = function () {
    this.foc();
    this.hdn();
    this.click();
};

