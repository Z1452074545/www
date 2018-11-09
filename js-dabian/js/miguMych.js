/**
 * Created by Administrator on 2018/1/18 0018.
 */





<!-- 导航栏 显示影藏-->
var nav_li1 = document.querySelectorAll('.nav_center ul li')[0];
var nav_li2 = document.querySelectorAll('.nav_center ul li')[1];
var nav_li3 = document.querySelectorAll('.nav_center ul li')[2];
var nav_yc = document.querySelector('.nav_yc');
var nav_ul1 = document.querySelectorAll('.div3 ul')[0];
var nav_ul2 = document.querySelectorAll('.div3 ul')[1];

my_nav_yc(nav_li1, nav_li2, nav_li3, nav_yc, nav_ul1, nav_ul2);
//    类样式
//myClsaaList(nav_li1, nav_li2, nav_li3);

//简单显示 隐藏封装
function my_nav_yc(a, b, c, d, e, f) {
    a.onmouseover = function () {
        d.style.display = "block";
        e.style.display = "block"
        f.style.display = "none"
    }
    b.onmouseover = function () {
        d.style.display = "block";
        f.style.display = "block"
        e.style.display = "none"
    }
    c.onmouseout = function () {
        d.style.display = "none";
    }
}


//旋转木马特效
function animate(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (var key in json) {
            var leader = parseInt(getStyle(obj, key)) || 0;

            var target = json[key];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[key] = leader + "px";
            if (leader === target) {
                clearInterval(obj.timer);
            }
        }

    }, 15);
}


function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader=getStyle(obj,k)*100;
                var target=json[k]*100;
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[k]=leader/100;
            } else if(k==="zIndex"){
                obj.style.zIndex=json[k];

            }else{
                var leader=parseInt(getStyle(obj,k))||0;
                var target=json[k];
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[k]=leader+"px";
            }
            if(leader!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }

    }, 15)
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];

    } else {
        return obj.currentStyle[attr];
    }
}


//图片放大镜
//找人
var box = document.getElementById("box");
var smallBox = document.getElementById("smallBox");
var mask = document.getElementById("mask");
var bigBox = document.getElementById("bigBox");
var bigImg = bigBox.children[0];

smallBox.onmouseover = function () {
    bigBox.style.display = "block";
    mask.style.display = "block";
};
smallBox.onmouseout = function () {
    bigBox.style.display = "none";
    mask.style.display = "none";
};
smallBox.onmousemove = function (event) {
    var event = event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.offsetLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.offsetTop;
    var boxX = pageX - box.offsetLeft;
    var boxY = pageY - box.offsetTop;
    var maskX = boxX - mask.offsetWidth / 2;
    var maskY = boxY - mask.offsetHeight / 2;
    //限制mask移动的范围
    if (maskX < 0) {
        maskX = 0;
    }
    if (maskX > smallBox.offsetWidth - mask.offsetWidth) {
        maskX = smallBox.offsetWidth - mask.offsetWidth;
    }
    if (maskY < 0) {
        maskY = 0;
    }
    if (maskY > smallBox.offsetHeight - mask.offsetHeight) {
        maskY = smallBox.offsetHeight - mask.offsetHeight;
    }
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";

    //大图当前的位置 = 大图移动的总距离 / 遮罩移动的总距离 *  遮罩当前的位置
    //rate = 大图移动的总距离 / 遮罩移动的总距离

    //大图移动的总距离 = 大图片的宽度 - 大盒子的宽度
    var bigToMove = bigImg.offsetWidth - bigBox.offsetWidth;
    var maskToMove = smallBox.offsetWidth - mask.offsetWidth;

    var rate = bigToMove / maskToMove;

    bigImg.style.left = -rate * maskX + "px";
    bigImg.style.top = -rate * maskY + "px";
};



//ajax请求

//var ajax1=document.getElementById('ajax1');
//var ajp4=document.getElementById('ajp4');
//
//var  xhr=new XMLHttpRequest();
//
//xhr.open("get","./js/snh.json",true);
//xhr.send();
//
//xhr.onreadystatechange=function(){
//    if(xhr.readyState==4&&status==200){
//            var jsonObject=JSON.parse(xhr.responseText)
//
//        var html="";
//        for(var i=0;i<jsonObject.length;i++){
//             var item=jsonObject[i];
//            html+='<div>'+
//                    '<p class="p1">'+item[i].title+'<span >'+item[i].date+'</span>'+'</p>'+
//                    '<p class="p2">'+item[i].con+'</p>'+
//                    '<div class="p4">'+item.more+'</div>'+
//                    '</div>'
//        }
//        document.querySelector("#ajax1").innerHTML=html;
//    }
//}
function ajax(method, url, data, success) {
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (method == 'get' && data) {
        url += '?' + data;
    }

    xhr.open(method,url,true);
    if (method == 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 ) {
            if ( xhr.status == 200 ) {
                success && success(xhr.responseText);
            } else {
                alert('出错了,Err：' + xhr.status);
            }
        }

    }
}
var loading = false;
var page = 0;
//加载第一页
loadPage();
var oBtn=document.getElementById("ajp4");
console.log(oBtn);
var ajax1=document.getElementById("ajax1");
console.log(ajax1);
//点击的时候加载下一页
oBtn.onclick = function() {
    if(!loading){
        loadPage();
    }else{
        //oBtn.innerHTML ="没有更多新闻了";

    }
}
function loadPage(){
    loading = true;
    //oBtn.innerHTML = "加载中...";
    //oBtn.innerHTML = '加载中..';
    //开始ajax请求
    ajax('get','./js/snh.json','',function(data) {
        //将返回的数据变为json对象。
        var data = JSON.parse( data );

        //没有返回错误才开始加载数据
        if(page<data.length){
            console.log(data);
            var str = "";

            var item = data[page].item;
            console.log(item);
            for (var s = 0; s < item.length; s++) {
                console.log(item.length);
                //str +="<li>"+item[i].title+item[i].date+"</li>"
                str +="<li>"+"<p class='p1'>"+item[s].title+"<span>"+item[s].date +
                    "</span>" +"</p>"+"<p class='p2'>"+item[s].con +"</p>" +"<p>"+item[s].more+"</p>"
                    +"</li>"
                console.log(str);
            }


            ajax1.innerHTML += str;
            page++;
            loading = false;

        }else{
            oBtn.innerHTML ="没有更多新闻了";

        }


    });
}










////楼层跳跃
//
//var lcty=document.querySelector(".lcty");
//console.log(lcty);



