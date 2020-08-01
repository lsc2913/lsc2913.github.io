//先做随机生成
function Game(select,width) {
    this.cellCount = 9;
    this.passMap = [];//存放通过图片位置
    this.moveMap = [];//打乱的图片位置
    this.select = select;
    this.cellWidth = width/3;
    this.whiteMap = null;//用来存放空白图片，后期拼图成功后恢复
}
//创建标签
Game.prototype.createTagName = function () {
    var x=0;
    var y=-1;
    for (var i=0;i<this.cellCount;i++){
        var Div = document.createElement('div');
        Div.className = 'a'+(i+1)+'';
        this.passMap.push(Div);
        //设置背景定位
        if (i%3==0){
            x=0;
            y++;
        }else{
            x++;
        }
        Div.style.backgroundPosition = -this.cellWidth*x+'px -'+this.cellWidth*y+'px';
    }
    //创建一个随机空白
    var index = Math.floor(Math.random()*this.passMap.length);
    this.whiteMap = this.passMap[index];
    this.whiteMap.style.backgroundImage = 'none';
};
//获取元素
Game.prototype.query = function(select){
    return document.querySelector(select)
};
//复制一张地图用来打乱
Game.prototype.copyMap = function(){
    var map = this.passMap.concat();
    for (var i=0;i<this.passMap.length;i++){
        var random = Math.floor(Math.random()*map.length);
        var aa = map.splice(random,1)[0];
        this.moveMap.push(aa)
    }
};
//将打乱的地图添加到页面中
Game.prototype.append = function(){
    var x=0;
    var y=-1;

    for (var i=0;i<this.moveMap.length;i++){
        if (i%3==0){
            x=0;
            y++;
        }else{
            x++;
        }
        this.moveMap[i].style.left = this.cellWidth*x+'px';
        this.moveMap[i].style.top = this.cellWidth*y+'px';
        this.query(this.select).appendChild(this.moveMap[i])
    }
};
//绑定点击事件
Game.prototype.click = function(){
    var _this = this;
    for (var i=0;i<this.moveMap.length;i++){
        this.moveMap[i].onclick = function () {
            //找出空白图片的位置
            if (this==_this.whiteMap){
                return;
            }else{
                //获取当前移动的样式
                var moveStyle = getComputedStyle(this);
                var moveLeft = parseInt(moveStyle.left);
                var moveTop = parseInt(moveStyle.top);
                //获取空白块的样式
                var whiteStyle = getComputedStyle(_this.whiteMap);
                var whiteLeft = parseInt(whiteStyle.left);
                var whiteTop = parseInt(whiteStyle.top);
                if (moveTop==whiteTop&&(moveLeft+_this.cellWidth==whiteLeft||moveLeft-_this.cellWidth==whiteLeft)){
                    this.style.left = whiteLeft+'px';//判断水平方向移动
                    _this.whiteMap.style.left = moveLeft+'px';
                    _this.isFinished(this);//每次移动判断是否通关
                }else if(moveLeft==whiteLeft&&(moveTop+_this.cellWidth==whiteTop||moveTop-_this.cellWidth==whiteTop)){
                    this.style.top = whiteTop+'px';//判断垂直方向移动
                    _this.whiteMap.style.top = moveTop+'px';
                    _this.isFinished(this);//每次移动判断是否通关
                }

            }
        }
    }
};
//判断通关
Game.prototype.isFinished = function(th){
    //获取点击时移动元素的下标
    var moveIndex = this.moveMap.indexOf(th);
    //获取空白块的下标
    var whiteIndex = this.moveMap.indexOf(this.whiteMap);
    //交换两个元素
    let empty = this.moveMap[moveIndex];
    this.moveMap[moveIndex] = this.moveMap[whiteIndex];
    this.moveMap[whiteIndex] = empty;
    //遍历判断通关地图与移动地图是否一致
    for (var i=0;i<this.passMap.length;i++){
        if (this.passMap[i]!=this.moveMap[i]){
            console.log('不通关');
            return;
        }
    }
    //恢复空白块的背景图片
    let x=0;
    let y=-1;
    if (i%3==0){
        x=0;
        y++;
    }else{
        x++;
    }
    this.whiteMap.style.backgroundPosition =  -this.cellWidth*x+'px -'+this.cellWidth*y+'px';
    alert('恭喜通关！')
};

//初始化
Game.prototype.init = function () {
    this.createTagName();
    this.copyMap();
    this.append();
    this.click();
};