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


//头部导航 类样式变化 封装
function myClsaaList(a, b, c) {
    a.onclick = function () {
        a.className = "nav_border";
        b.className = "";
        c.className = "";
    }
    b.onclick = function () {
        b.className = "nav_border";
        a.className = "";
        c.className = "";
    }
    c.onclick = function () {
        c.className = "nav_border";
        b.className = "";
        a.className = "";
    }
}

//banner

var pic = document.getElementById("pic");
var inner = document.getElementById("inner");
var li = document.getElementById("ul").getElementsByTagName("a");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var index = 1;
var timer = null;

//inner.onmouseover=function(){
//    prev.style.display="block";
//    next.style.display="block";
//}
//inner.onmouseout=function(){
//    prev.style.display="none";
//    next.style.display="none";
//}
//设置一个变量来存放自动轮播定时器
var timer2 = null;
var state = false;
prev.onclick = function () {
    if (state) {
        return;
    }
    animate(1903);
    if (index == 1) {
        index = 8;
    } else {
        index--;
    }
    showButton();
}
next.onclick = function () {
    if (state) {
        return;
    }
    animate(-1903);
    if (index == 8) {
        index = 1;
    } else {
        index++;
    }
    showButton();
}

function animate(offset) {
    state = true;
    var time = 300;
    var interval = 10;
    var speed = offset / (time / interval);

    var newLeft = parseInt(inner.style.left) + offset;

    function go() {
        clearInterval(timer);
        if ((speed < 0 && parseInt(inner.style.left) > newLeft) || (speed > 0 && parseInt(inner.style.left) < newLeft)) {
            inner.style.left = parseInt(inner.style.left) + speed + "px";
            timer = setInterval(go, interval);
        } else {
            state = false;
            inner.style.left = newLeft + "px";
            if (parseInt(inner.style.left) < -15224) {
                inner.style.left = -1903 + "px";
            }
            if (parseInt(inner.style.left) > -1903) {
                inner.style.left = -15224 + "px";
            }
        }
    }

    go();

}
function showButton() {
    for (var i = 0; i < li.length; i++) {
        if (li[i].className == "active") {
            li[i].className = "";
            break;
        }
    }
    li[index - 1].className = "active";
}
for (var i = 0; i < li.length; i++) {
    li[i].onclick = function () {
        var id = parseInt(this.getAttribute("id"));
        var offset = (id - index) * -1903;
        if (state) {
            return;
        }
        animate(offset);
        index = id;
        showButton();
    }
}
//通过定时器来不断的点击 next按钮 来实现轮播效果.
function play() {
    timer2 = setInterval(function () {
        next.onclick();
    }, 3000);
}
//停止轮播函数，清除定时器
function stop() {
    clearInterval(timer2);
}
//给.pic添加移进悬浮和移出事件
pic.onmouseover = stop;
pic.onmouseout = play;
//第一次访问页面开始轮播
play();


//新歌首发 无缝滚动效果
var wf_ct2 = document.getElementById('wf_ct2');
wflb(wf_ct2);

//无缝滚动，封装
function wflb(a) {
    var wf_ul = a.children[0];
    var wf_li = wf_ul.children;
    var timer = null
    wf_ul.innerHTML += wf_ul.innerHTML;
    wf_ul.style.width = wf_li[0].offsetWidth * wf_li.length + "px";
    qdgd();
    function qdgd() {
        timer = setInterval(function () {
            var newul = wf_ul.offsetLeft + 1;
            if (newul >= 0) {
                newul = -wf_ul.offsetWidth / 2;
            }
            wf_ul.style.left = newul + "px";
        }, 1);
        a.onmouseover = function () {
            clearInterval(timer);
        }
        a.onmouseout = function () {
            qdgd();
        }
    }

}
var wf_ct3 = document.getElementById('wf_ct4');
wflb(wf_ct3);





var box = document.getElementById("box");
var screen = box.children[0];
var ul = screen.children[0];
var ulLis = ul.children;
//    var ol = screen.children[1];
//    var arr = document.getElementById("arr");
var left = document.getElementById("left");
var right = document.getElementById("right");
var imgWidth = screen.offsetWidth;

//    克隆第一张图
//    var firstImg = ulLis[0].cloneNode(true);
//    ul.appendChild(firstImg);

box.onmouseover = function () {
    arr.style.display = "block";
//        clearInterval(timer);
};
box.onmouseout = function () {
    arr.style.display = "none";
//        timer = setInterval(playNext, 1000);
};

var pic = 0;
right.onclick = function () {
    if (pic >= ulLis.length - 1) {
        ul.style.left = 0;
        pic = 0;
    }
    pic++;
    target = -pic * imgWidth;
    animate1(ul, 30, target);
};

left.onclick = function () {
    if (pic <= 0) {
        ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
        pic = ulLis.length - 1;
    }
    pic--;
    target = -pic * imgWidth;
    animate1(ul, 30, target);
};

//    timer = setInterval(playNext, 1000);
//    function playNext() {
//        right.onclick();
//    }
//匀速动画封装
function animate1(ele, step, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var leader = ele.offsetLeft;
        step = Math.abs(step);
        step = leader < target ? step : -step;
        if (Math.abs(target - leader) >= Math.abs(step)) {
            leader += step;
            ele.style.left = leader + "px";
        } else {
            ele.style.left = leader + "px";
            clearInterval(ele.timer);
        }
    }, 15);
}


var box1 = document.getElementById("box1");
var screen1 = box1.children[0];
var ul1 = screen1.children[0];
var ulLis1 = ul1.children;
//    var ol = screen.children[1];
//    var arr = document.getElementById("arr");
var left1 = document.getElementById("left1");
var right1 = document.getElementById("right1");
var imgWidth1 = screen.offsetWidth;

//    克隆第一张图
//    var firstImg = ulLis[0].cloneNode(true);
//    ul.appendChild(firstImg);

box1.onmouseover = function () {
    arr1.style.display = "block";
//        clearInterval(timer);
};
box1.onmouseout = function () {
    arr1.style.display = "none";
//        timer = setInterval(playNext, 1000);
};

var pic1 = 0;
right1.onclick = function () {
    if (pic1 >= ulLis1.length - 1) {
        ul1.style.left = 0;
        pic1 = 0;
    }
    pic1++;
    target1 = -pic1 * imgWidth1;
    animate1(ul1, 30, target1);
};

left1.onclick = function () {
    if (pic1 <= 0) {
        ul1.style.left = -(ulLis1.length - 1) * imgWidth1 + "px";
        pic1 = ulLis1.length - 1;
    }
    pic1--;
    target1 = -pic1 * imgWidth1;
    animate1(ul1, 30, target1);
};

//回到顶部
var newtop = document.getElementById("newtop");
window.onscroll = function () {
    if (scroll().top > 2000) {
        newtop.className = "newtop";
    } else {
        newtop.className = "newtop fixed";

    }
    leader=scroll().top;
}
var leader = 0, target = 0, timer = null;
newtop.onclick=function(){
    clearInterval(timer);
    timer = setInterval(function () {
        var step=(target-leader)/10
        step=step>0 ? Math.ceil(step) : Math.floor(step)
        leader+=step
        window.scrollTo(0,leader)
        if(leader===target){
            clearInterval(timer)
        }
    }, 15)
}

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

//咪咕音乐——我的
// banner tab选项卡；

