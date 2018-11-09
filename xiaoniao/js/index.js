/**
 * Created by Administrator on 2018/1/29 0029.
 */
//引入头部和底部
$(function(){
    $("#header").load("head.html");
    $("#footer").load("foot.html");
    var kk = 0;
    var index = 0
    $(".banner_dj ul li").click(function () {
        index = $(this).index()
        kk = index
        $(".dd .dban").eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200)
        $(this).addClass("xdd").siblings().removeClass("xdd")
    })
    var fa = true;

    $("#left").click(function () {
        if (fa == true) {
            fa == false;
            kk--
            if (kk < 0) {
                kk = 2
            }
            $(".banner_dj ul li").eq(kk).addClass("xdd").siblings().removeClass("xdd")
            index--;
            if (index < 0) {
                index = 2
            }
            $(".dd .dban").eq(index).fadeIn(200).siblings().fadeOut(200, function () {
                fa = true;
            })
        }
    })
    $("#right").click(function () {
        if (fa == true) {
            fa = false;
            kk++
            if (kk > 2) {
                kk = 0
            }
            $(".banner_dj ul li").eq(kk).addClass("xdd").siblings().removeClass("xdd")
            index++;
            if (index > 2) {
                index = 0
            }
            $(".dd .dban").eq(index).fadeIn(200).siblings().fadeOut(200, function () {
                fa = true;
            })
        }
    })
    var a = 0;
    var b = 0
    var hq=0
    $(".line .line1").click(function(){
        a=$(this).index()
        if(a>hq){
            $(".left_content").removeClass("animated bounceInLeft").addClass("animated bounceInRight")
            $(".content_body").removeClass("animated bounceInLeft").addClass("animated bounceInRight")
            $(".right_content h1").removeClass("animated bounceInLeft").addClass("animated bounceInRight")
        }else{
            $(".left_content").removeClass("animated bounceInRight").addClass("animated bounceInLeft")
            $(".content_body").removeClass("animated bounceInRight").addClass("animated bounceInLeft")
            $(".right_content h1").removeClass("animated bounceInRight").addClass("animated bounceInLeft")
        }
        $(".line .line1").eq(a).find("i").css({display:"block"})
        $(this).siblings().find("i").css({display:"none"})
        $("#contents").children().eq(a).stop().fadeIn(200).siblings().stop().fadeOut(200)
        b=a
        hq=$(".line .line1").index(this);
    })
    fb=true
    $("#zuo").click(function(){
        if(fb==true){
            fb=false
            b--;
            if(b<0){
                b=5
            }
            a--
            if(a<0){
                a=5
            }
            $(".line .line1").find("i").css({display:"none"})
            $(".line .line1").eq(a).find("i").css({display:"block"})
            $("#contents>div")  .removeClass("animated bounceInRight").addClass("animated bounceInLeft")
            $("#contents>div>div .content_body").removeClass("animated bounceInRight").addClass("animated bounceInLeft")
            $("#contents>div .right_content h1").removeClass("animated bounceInRight").addClass("animated bounceInLeft")
            //$(".p2").addClass("animated bounceInLeft")
            $("#contents").children().eq(b).stop().fadeIn(200).siblings().stop().fadeOut(200,function(){
                fb=true
            })

        }
    })
    $("#you").click(function(){
        if(fb==true){
            fb=false
            b++;
            if(b>5){
                b=0
            }
            a++
            if(a>5){
                a=0
            }
            $(".line .line1").find("i").css({display:"none"})
            $(".line .line1").eq(b).find("i").css({display:"block"})
            $("#contents>div").removeClass("animated bounceInLeft").addClass("animated bounceInRight")
            $("#contents>div>div .content_body").removeClass("animated bounceInLeft").addClass("animated bounceInRight")
            $("#contents>div .right_content h1").removeClass("animated bounceInLeft").addClass("animated bounceInRight")
            //$(".p2").addClass("animated bounceInRight")
            $("#contents").children().eq(b).stop().fadeIn(200).siblings().stop().fadeOut(200,function(){
                fb=true
            })
        }
    })
    $(".ywconten .ywconten1 .zhankai").eq(0).click(function () {
        $(this).toggleClass("zhankais")
        $(".ywconten .qq").eq(0).slideToggle(200)
    })
    $(".ywconten .ywconten1 .zhankai").eq(1).click(function () {
        $(this).toggleClass("zhankais")
        $(".ywconten .qq").eq(1).slideToggle(200)
    })
    $(".ywconten .ywconten1 .zhankai").eq(2).click(function () {
        $(this).toggleClass("zhankais")
        $(".ywconten .qq").eq(2).slideToggle(200)
    })
})

//左右点击小圆点
$(function(){
    function xiaoDianji(a){
        $(a).hover(function(){
            $(this).addClass("animated rubberBand");
        },function(){
            $(this).removeClass("animated rubberBand");
        })
    }
    //banner 小圆点
    xiaoDianji("#left");
    xiaoDianji("#right");

    xiaoDianji("#zuo1");
    xiaoDianji("#you1");

    function towLeftDianji(a){
      $(a).hover(function(){
          $(this).attr("src","images/prev_jiantou_hover.png");
          $(this).addClass("animated rubberBand");
      },function(){
          $(this).attr("src","images/prev_jiantou.png");
          $(this).removeClass("animated rubberBand");
      })
    }
    towLeftDianji("#zuo");

    function towRightDianji(a){
        $(a).hover(function(){
            $(this).attr("src","images/next_jiantou_hover.png");
            $(this).addClass("animated rubberBand");
        },function(){
            $(this).attr("src","images/next_jiantou.png");
            $(this).removeClass("animated rubberBand");
        })
    }
    towRightDianji("#you");
})
//业务范围 圆hover效果
$(function(){
      function yw_yuan(){
          $(".centerimg,.zhankai").hover(function(){
              $(this).addClass("animated tada");
          },function(){
              $(this).removeClass("animated tada");
          })
      }
    yw_yuan()
})
//业务范围 点击中间圆展开
$(function(){
    function yw_djzk(){

        $(".centerimg").eq(0).click(function(){
            $(".ywconten .qq").eq(0).slideToggle(200);
        })
        $(".centerimg").eq(1).click(function(){
            $(".ywconten .qq").eq(1).slideToggle(200);
        })
        $(".centerimg").eq(2).click(function(){
            $(".ywconten .qq").eq(2).slideToggle(200);
        })
    }
    yw_djzk()
    //yw_djzk(1)
    //yw_djzk(2)
})
//团队介绍 轮播图
//$(function(){
//    (function(){
//        var tSpan=$('.team .bchange .middle span');
//        var tPrev=$('.team .bchange>.prev');
//        var tNext=$('.team .bchange>.next');
//        var tMove=$('.team .teammove_wrap .team_move');
//        var ww=$('.team .teammove_wrap .twoteam_wrap').width();
//        var len=$('.team .teammove_wrap .twoteam_wrap').length;
//        var index=0;
//        var fa=true;
//        var timer=null;
//        var timer1=null;
//        function next(){
//            if(fa){
//                fa=false;
//                index++;
//                if(index>len-1){
//                    index=1;
//                    tMove.css({left:0});
//                }
//                move();
//            }
//        }
//        function move(){
//            tMove.animate({left:-index*ww},1000,"backIn",function(){
//                fa=true;
//            });
//            if(index>=len-1){
//                tSpan.removeClass('now2').eq(0).addClass('now2');
//            }else{
//                tSpan.removeClass('now2').eq(index).addClass('now2');
//            }
//        }
//        //点击下一张
//        tNext.click(function(){
//            clearInterval(timer);
//            next();
//
//        });
//        //点击上一张
//        tPrev.click(function(){
//            clearInterval(timer);
//            if(fa){
//                fa=false;
//                index--;
//                if(index<0){
//                    index=len-2;
//                    tMove.css({left:-(len-1)*ww});
//                }
//                move();
//            }
//        });
//
//        tSpan.hover(function(){
//            var that=this;
//            clearTimeout(timer1);
//            timer1=setTimeout(function(){
//                index=$(that).index();
//                move();
//            },200);
//        });
//
//        timer=setInterval(next,3000);
//        $('.team').hover(function(){
//            clearInterval(timer);
//        },function(){
//            timer=setInterval(next,3000);
//        });
//    })()
//})

//团队介绍轮播图
$(function(){
    (function(){
        var tSpan=$('#tt li');
        var tPrev=$('#zuo1');
        var tNext=$('#you1');
        var tMove=$('.teammove_wrap .team_move');
        var ww=$('.teammove_wrap .twoteam_wrap').width();
        var len=$('.teammove_wrap .twoteam_wrap').length;
        var index=0;
        var fa=true;
        var timer=null;
        var timer1=null;
        function next(){
            if(fa){
                fa=false;
                index++;
                if(index>len-1){
                    index=1;
                    tMove.css({left:0});
                }
                move();
            }
        }
        function move(){
            tMove.animate({left:-index*ww},1000,"backIn",function(){
                fa=true;
            });
            if(index>=len-1){
                tSpan.removeClass('xdd').eq(0).addClass('xdd');
            }else{
                tSpan.removeClass('xdd').eq(index).addClass('xdd');
            }
        }
        //点击下一张
        tNext.click(function(){
            clearInterval(timer);
            next();

        });
        //点击上一张
        tPrev.click(function(){
            clearInterval(timer);
            if(fa){
                fa=false;
                index--;
                if(index<0){
                    index=len-2;
                    tMove.css({left:-(len-1)*ww});
                }
                move();
            }
        });

        tSpan.hover(function(){
            var that=this;
            clearTimeout(timer1);
            timer1=setTimeout(function(){
                index=$(that).index();
                move();
            },200);
        });

        timer=setInterval(next,1500);
        $('.team').hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(next,1500);
        });
    })()
})






