/**
 * Created by Administrator on 2018/1/17 0017.
 */

//网易导航 显示隐藏
var wy_center = document.getElementById('wy_center');
var wy_yc1 = document.getElementById('wy_yc1')

wy_center.onmouseover = function () {
    wy_yc1.style.display = "block";
}
wy_center.onmouseout = function () {
    wy_yc1.style.display = "none";
}
wy_yc1.onmouseover = function () {
    wy_yc1.style.display = "block";
}
wy_yc1.onmouseout = function () {
    wy_yc1.style.display = "none";
}

var wy_ml = document.getElementById('wy_ml');
var wy_yc2 = document.getElementById('wy_yc2')

wy_ml.onmouseover = function () {
    wy_yc2.style.display = "block";
}
wy_ml.onmouseout = function () {
    wy_yc2.style.display = "none";
}
wy_yc2.onmouseover = function () {
    wy_yc2.style.display = "block";
}
wy_yc2.onmouseout = function () {
    wy_yc2.style.display = "none";
}
//banner 无缝滚动
var box = document.getElementById('banner');
mywflb(box);
function mywflb(a) {
    var ul = a.children[0];
    var li = ul.children;
    var timer = null;
    ul.innerHTML += ul.innerHTML;
    ul.style.height = li[0].offsetHeight * li.length + "px";

    function qd() {
        timer = setInterval(function () {
            var newUl = ul.offsetTop + 1;
            if (newUl >= 0) {
                newUl = -ul.offsetHeight / 2;
            }
            ul.style.top = newUl + "px";
        }, 1)
    }

    box.onmouseover = function () {
        qd();
    }
    box.onmouseout = function () {
        clearInterval(timer);
    }
}


//缓动动画封装
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

//正则验证
var inp1 = document.getElementById('inp1');
var jieshou1 = document.getElementById('jieshou1');
console.log(jieshou1);

inp1.addEventListener("blur",function(){
    if(this.value == ""){
        return;
    }
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(reg.test(inp1.value)){
        jieshou1.innerHTML="ok"
    }else {
        jieshou1.innerHTML="no"
    }
});

var inp2 = document.getElementById('inp2');
var jieshou2 = document.getElementById('jieshou2');
console.log(jieshou2);
inp2.addEventListener("blur",function(){
    if(this.value == ""){
        return;
    }
    var ret =/[a-zA-Z\d+]{6,16}/;
    if(ret.test(inp2.value)){
        jieshou2.innerHTML="ok"
    }else {
        jieshou2.innerHTML="no"
    }
});

//模态框
var motaik = document.getElementById('motaik');
var mtk_1 = document.getElementById('mtk_1');
var mtk_x = document.getElementById('mtk_x');
var gclb = document.getElementById('gclb');
gclb.onclick = function () {
    motaik.style.display = "block";
    mtk_1.style.display = "block";
}
mtk_x.onclick = function () {
    motaik.style.display = "none";
    mtk_1.style.display = "none";
}

//tab选项卡
var ct1_top = document.querySelectorAll('.ct1_top ul li');
var ct2_ul = document.querySelectorAll('.ct2>ul');

//for (var i = 0; i < ct2_ul.length; i++) {
//    ct1_top[i].index = i;
//    ct1_top[i].onclick = function () {
//           for(var i = 0; i < ct2_ul.length; i++){
//               ct2_ul[i].style.display="none";
//           }
//        ct2_ul[this.index].style.display="block";
//    }
//}

function mytab(a, b) {
    for (var i = 0; i < b.length; i++) {
        a[i].index = i;
        a[i].onclick = function () {
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
                a[i].className = "";
            }
            b[this.index].style.display = "block";
            a[this.index].className = "new_bg";
        }
    }
}
mytab(ct1_top, ct2_ul);

//滑动轮播
var ct4 = document.getElementById('ct4');
var lunbo = document.getElementById('lunbo');
var btn_left = document.getElementById('hd_left');
var btn_right = document.getElementById('hd_right');

function dianji(offset) {
    var newleft = parseInt(lunbo.style.left) + offset;
    lunbo.style.left = newleft + "px";
    if (newleft < -6000) {
        lunbo.style.left = -1200 + "px";
    }
    if (newleft > -1200) {
        lunbo.style.left = -6000 + "px";
    }
}
btn_left.onclick = function () {
    dianji(1200);
}
btn_right.onclick = function () {
    dianji(-1200);
}

var ct_dian = document.querySelectorAll('.ct_dian ul li');
ct_dian[0].onmouseover = function () {
    lunbo.style.left = -1200 + "px";
}
ct_dian[1].onmouseover = function () {
    lunbo.style.left = -2400 + "px";
}
ct_dian[2].onmouseover = function () {
    lunbo.style.left = -3600 + "px";
}
ct_dian[3].onmouseover = function () {
    lunbo.style.left = -4800 + "px";
}
ct_dian[4].onmouseover = function () {
    lunbo.style.left = -6000 + "px";
}

var ct6 = document.getElementById('ct6');
drag('ct6_1', ct6);
function drag(id, a) {    //  id=拖动的盒子。
    var box = document.getElementById(id)    //  获取到拖动的盒子。
    box.onmousedown = function (ev) {    //  鼠标按下盒子的时候。
        var oEvent = ev || event;    //  兼容
        var x = oEvent.clientX - box.offsetLeft;
        var y = oEvent.clientY - box.offsetTop;
        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            var left = oEvent.clientX - x;
            var top = oEvent.clientY - y;
            if (left < 50) {
                left = 0;
            }
            if (top < 50) {
                top = 0;
            }
            if (left > a.clientWidth - 245) {
                left = a.clientWidth - 195
            }
            if (top > a.clientHeight - 160) {
                top = a.clientHeight - 110
            }
            box.style.left = left + "px"
            box.style.top = top + "px"
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }
}

//返回顶部
var newtop = document.getElementById("ct7");
window.onscroll = function () {
    leader = scroll().top;
}
var leader = 0, target = 0, timer = null;

newtop.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        var step = (target - leader) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        leader += step
        window.scrollTo(0, leader)
        if (leader === target) {
            clearInterval(timer)
        }
    }, 15)
}
