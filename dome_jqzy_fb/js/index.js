/**
 * Created by Administrator on 2018/2/6 0006.
 */
//����ͷ����β��
//$(function(){
//    $("#header").load("header.html");
//    $("#footer").load("footer.html");
//})
//banner �ֲ�ͼ
$(function(){
    //$("ul").append($("ul>li").eq(0).clone(true));
    var len=$(".banner ol li").length;
    var kk=0;
    var index=0;
    var imgWidth=$(".banner ol li img").css("width");
    //alert(imgWidth);
//        ���СԲ��
    $(".banner ul li").click(function(){
        index=$(this).index();
        kk=$(this).index();
        $(".banner ol").stop(true).animate({left:-1366*index},1000);//ul�ƶ��ĳ���
        $(".banner ul li").removeClass("banner_now").eq(kk).addClass("banner_now");
    })
//        �ҵ��
    var fa=true;
    $("#next").click(function(){
        if(fa==true){
            fa==false;
            kk++;
            if(kk>len-2){
                kk=0;
            }
            $(".banner ul li").removeClass("banner_now").eq(kk).addClass("banner_now");
            index++;
            if(index>len-1){
                index=1;
                $(".banner ol").css({left:0})
            }
            $(".banner ol").stop().animate({left:-1366*index},1000,function(){
                fa=true;
            })
        }
    })

    //����

    $("#prev").click(function(){
        if(fa==true){
            fa=false;
            index--;
            if(index<0){
                index=len-2;
                $(".banner ol").css({left:-(len-1)*1366})
            }
            $(".banner ol").stop().animate({left:-1366*index},1000,function(){
                fa=true;
            });
            kk--;
            if(kk<0){
                kk=len-2;
            }
            $(".banner ul li").removeClass("banner_now").eq(kk).addClass("banner_now");
        }
    })
})
//��Ʒ����
$(function(){
    $(".cp_dh_s ul li").click(function(){
        $(".cp_dh_s ul li").removeClass("cp_dh_now");
        $(this).addClass("cp_dh_now");
        var $index=$(this).index();
        $(".cp_cont ul").hide().eq($index).stop().show(1500);
    })
})
//����֧��
$(function(){
    var len=$(".box ul li").length;
    var kk=0;
    var index=0;
    var timer=null;
//        ���СԲ��
    $(".js_cont ol li").click(function(){
        index=$(this).index();
        kk=$(this).index();
        $(".box ul").stop(true).animate({left:-1200*index},1000);//ul�ƶ��ĳ���
        $(".js_cont ol li").removeClass("col").eq(kk).addClass("col");
    })
//        �ҵ��
    var fa=true;
    timer=setInterval(btnRight,2000);
    $(".box .right").click(btnRight);
    function btnRight(){
        if(fa==true){
            fa==false;
            kk++;
            if(kk>len-2){
//                if(kk>4){
                kk=0;
            }
            $(".js_cont ol li").removeClass("col").eq(kk).addClass("col");
            index++;
            if(index>len-1){
                index=1;
                $(".box ul").css({left:0})
            }
            $(".box ul").stop().animate({left:-1200*index},1000,function(){
                fa=true;
            })
        }
    }

    //����
    $(".box .left").click(ttt)
    function ttt(){
        if(fa==true){
            fa=false;
            index--;
            if(index<0){
                index=len-2;
                $(".box ul").css({left:-(len-1)*1200})
            }
            $(".box ul").stop().animate({left:-1200*index},1000,function(){
                fa=true;
            });
            kk--;
            if(kk<0){
                kk=len-2;
            }
            $(".js_contol li").removeClass("col").eq(kk).addClass("col");
        }
    }
})
//�Ŷ�
$(function(){
    var len=$(".pic_cont").length;
    var kk=0;
    var index=0;
    var timer=null;
    var fa=true;

    //        ���СԲ��
    $(".td_li ul li").click(function(){
        index=$(this).index();
        kk=$(this).index();
        $(".pic").stop(true).animate({left:-1200*index},1000);//ul�ƶ��ĳ���
        $(".td_li ul li dl dd:nth-child(2)").removeClass("td_now").eq(kk).addClass("td_now");
    })
//    ����
    $("#td_prev").click(ttt)
    function ttt(){
        if(fa==true){
            fa=false;
            index--;
            if(index<0){
                index=len-2;
                $(".pic").css({left:-(len-1)*1200})
            }
            $(".pic").stop().animate({left:-1200*index},1000,function(){
                fa=true;
            });
            kk--;
            if(kk<0){
                kk=len-2;
            }
            $(".td_li ul li dl dd:nth-child(2)").removeClass("td_now").eq(kk).addClass("td_now");
        }
    }

    //�ҵ��
    $("#td_next").click(btnRight);
    function btnRight(){
        if(fa==true){
            fa==false;
            kk++;
            if(kk>len-2){
                kk=0;
            }
            $(".td_li ul li dl dd:nth-child(2)").removeClass("td_now").eq(kk).addClass("td_now");
            index++;
            if(index>len-1){
                index=1;
                $(".pic").css({left:0})
            }
            $(".pic").stop().animate({left:-1200*index},1000,function(){
                fa=true;
            })
        }
    }

    $(".td_li ul li").hover(function(){
        $(this).find("dl dd:nth-child(1)").css({"opacity":"1"})
        $(this).find("dl dd:nth-child(2)").addClass("td_now")
    },function(){
        $(this).find("dl dd:nth-child(1)").css({"opacity":"0"})
        $(this).find("dl dd:nth-child(2)").removeClass("td_now")
    })
})
//��ϵ����




