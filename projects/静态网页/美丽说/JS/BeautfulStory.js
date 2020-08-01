window.onload = function () {
    var oBaby = document.querySelectorAll('.logo .search .input-top a');
    //console.log(oBaby);

    for (var i=0;i<oBaby.length;i++)
    {
        oBaby[i].onclick = function () {
            for (var j=0;j<oBaby.length;j++)
            {
                oBaby[j].removeAttribute('class');
            }
            this.setAttribute('class','baby')
        }
    }
//侧边栏与导航栏
    var small = document.querySelector('.sidebar ul li:last-child a');
    var oNav = document.querySelector('.hanner');

    var target = oNav.offsetTop;
    window.onscroll = function () {
        if (window.pageYOffset>0)
        {
            small.style.display = 'block'
        }else{
            small.style.display = 'none'
        }


        if (window.pageYOffset>target)
        {
            oNav.style.position = 'fixed';
            oNav.style.top = 0;
        }
        else  {
            oNav.style.position = 'static';
            oNav.style.top =target+'px';
        }

    };
    if (window.pageYOffset>target)
    {
        oNav.style.position = 'fixed';
        oNav.style.top = 0;
    }
    if (window.pageYOffset>0)
    {
        small.style.display = 'block'

    }

    small.onclick = function () {
        animatedLeft(window,0);
    };



    //今日新品
    var otlA = document.querySelectorAll('.small-title .title-left ul li a');
    var oUl = document.querySelectorAll('.main ul');
    //console.log(oUl);
    for (var j=0;j<otlA.length;j++)
    {
        otlA[j].setAttribute('index',j);
        otlA[j].onclick = function () {
            for (var k=0;k<otlA.length;k++)
            {
                otlA[k].removeAttribute('class');
                otlA[k].style.position = 'static';
            }

            this.setAttribute('class','titleColor');
            this.style.position = 'relative';
            for (var m=0;m<otlA.length;m++)
            {
                oUl[m].style.display = 'none';
            }
            var ab = this.getAttribute('index');
            oUl[ab].style.display = 'block'
        }
    }

    //轮播图

    //移入移除隐藏按钮
    var oRight_arrow = document.querySelector('.right-arrow');
    var oLeft_arrow = document.querySelector('.left-arrow');
    var lunBo = document.querySelector('.lunbo-map');
    //var oOl = document.querySelector('.lunbo-map ol');
    var oLunBo_ul = document.querySelector('.lunbo-map ul');

    //console.log(lunBo.offsetWidth)
    lunBo.addEventListener('mouseover',function () {
        oRight_arrow.style.display = 'block';
        oLeft_arrow.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    lunBo.addEventListener('mouseout',function () {
        oRight_arrow.style.display = 'none';
        oLeft_arrow.style.display = 'none';
        if (timer ==null)
        {
            timer = setInterval(function () {
                oRight_arrow.click();
            },2000)
        }
    });
    
    
    //动态生成小圆点
    var oImgLi = document.querySelectorAll('.lunbo-map ul li');
    var oLunBo_ol =document.querySelector('.lunbo-map ol');

    //console.log(oImgLi.length)
    for (var n=0;n<oImgLi.length;n++)
    {
        var oLi=document.createElement('li');
        oLi.setAttribute('index',n);
        oLunBo_ol.appendChild(oLi);


    //oLunBo_ol.children[0].className = "bigIcon";

    //点击高亮
    //var oOl_li = document.querySelectorAll('.lunbo-map ol li');
    //console.log(oOl_li.length)

        oLi.onclick = function () {
            for (var k=0;k<oLunBo_ol.children.length;k++)
            {
                oLunBo_ol.children[k].removeAttribute('class');
            }
            this.className='bigIcon';
            var aa = this.getAttribute('index');

            num = aa;
            num2 = aa;
            animated(oLunBo_ul,-lunBo.offsetWidth*aa)
        }
    }
    oLunBo_ol.children[0].className = 'bigIcon';
    //console.log(oLunBo_ol.children[0])




    //克隆第一张图片
    var copy_img = oImgLi[0].cloneNode(true);
    oLunBo_ul.appendChild(copy_img);
    oLunBo_ul.style.width = oLunBo_ul.children.length*100+'%';
    //点击右侧按钮滚动图片
    var num =0;
    var num2 = 0;

    //右箭头
    //节流阀防止多次点击
    var dd = true;
    oRight_arrow.onclick = function () {
//console.log(oLunBo_ul.children.length)
        if (dd)
        {
            dd = false;

        if (num==oLunBo_ul.children.length-1)
        {
            oLunBo_ul.style.left = 0;
            num = 0;
        }
        num++;
        animated(oLunBo_ul,-oImgLi[0].offsetWidth*num,function () {
            dd = true;
        });

        //点击右键下方小圆点跟随移动
        num2++;
        if (num2==oLunBo_ol.children.length)
        {
            num2=0;
        }
        for (var l=0;l<oLunBo_ol.children.length;l++)
        {
            oLunBo_ol.children[l].removeAttribute('class');
        }
        oLunBo_ol.children[num2].className = 'bigIcon'
        }

    };

    //左箭头
    oLeft_arrow.onclick = function () {
//console.log(oLunBo_ul.children.length)
        if (dd)
        {
            dd = false;

        if (num==0)
        {
            oLunBo_ul.style.left = -lunBo.offsetWidth*oImgLi.length+'px';
            num = oImgLi.length;
        }
        num--;
        animated(oLunBo_ul,-lunBo.offsetWidth*num,function () {
            dd = true;
        });

        //点击右键下方小圆点跟随移动
        num2--;
        if (num2==-1)
        {
            num2=oLunBo_ol.children.length-1;
        }
        for (var l=0;l<oLunBo_ol.children.length;l++)
        {
            oLunBo_ol.children[l].removeAttribute('class');
        }
        oLunBo_ol.children[num2].className = 'bigIcon'
        }

    };

    var timer = setInterval(function () {
        oRight_arrow.click();
    },2000);



};
