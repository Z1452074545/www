///**
// * Created by Administrator on 2018/1/10.
// */
//var wd_banner=document.getElementById('wd_banner');
//var wd_img=wd_banner.getElementsByTagName('img');
//
//var wd_ban_new=document.getElementById('wd_ban_new');
//var wd_lis=wd_ban_new.children;
//console.log(wd_lis);
//
//for(var i=0;i<wd_lis.length;i++){
//    wd_lis[i].index=i;
//    wd_lis[i].onclick=function(){
//        for(var i=0;i<wd_lis.length;i++){
//            wd_img.style.display="none";
//        }
//        wd_img[this.index].style.display="block";
//        this.className="new_bg";
//
//    }
//}


var wd_img=document.querySelectorAll(".wd_banner img");

var wd_lis=document.querySelectorAll(".wd_ban_new ul li");

function mytab(a,b) {
    for (var i = 0; i < b.length; i++) {
        a[i].index = i;
        a[i].onmouseover = function () {
            for (var i = 0; i < b.length; i++) {
                b[i].style.display = "none";
                a[i].className="";
            }
            b[this.index].style.display = "block";
            a[this.index].className="new_bg";
        }
    }
}

mytab(wd_lis,wd_img);

var ct1_2_lis=document.querySelectorAll('.ct1_2 ul li');
var ct1_3_dl=document.querySelectorAll('.ct1_3 dl');

mytab(ct1_2_lis,ct1_3_dl);

for(var i=0;i<ct1_2_lis.length;i++){
    ct1_2_lis[i].index=i;
    ct1_2_lis[i].onclick=function(){
        for(var i=0;i<ct1_2_lis.length;i++){

            ct1_2_lis[i].className="";
        }
        ct1_2_lis[this.index].className="ct1_2_new";
    }
}

var ct2_2_lis=document.querySelectorAll('.ct2_2 ul li');
var ct2_3_ul=document.querySelectorAll('.ct2_3 ul');
mytab(ct2_2_lis,ct2_3_ul);


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
var wf_ct5=document.getElementById("wf_ct5");
wflb(wf_ct5);


var lunbo=document.getElementById('lunbo');
var Dleft=document.getElementById('Dleft');
var Dright=document.getElementById('Dright');

function dianji(offset){
    var newleft=parseInt(lunbo.style.left)+offset;
    lunbo.style.left=newleft+"px";
    if(newleft<-4800){
        lunbo.style.left=-1200+"px";
    }
    if(newleft>-1200){
        lunbo.style.left=-4800+"px";
    }
}
Dleft.onclick=function(){
    dianji(1200);
}
Dright.onclick=function(){
    dianji(-1200);
}
