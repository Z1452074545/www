/**
 * Created by Administrator on 2018/2/2 0002.
 */
//返回顶部
$(function () {
    $(window).scroll(function(){
        if($(window).scrollTop()>=400){
            $("#scrollTop_wrap").fadeIn(300);
        }else{
            $("#scrollTop_wrap").fadeOut(300);
        }
    });
    $("#scrollTop").click(function(){
        $("html,body").animate({scrollTop:"0px"},600);
    });

    function xiaoDianji(a){
        $(a).hover(function(){
            $(this).addClass("animated rubberBand");
        },function(){
            $(this).removeClass("animated rubberBand");
        })
    }
    //返回顶部-圆hover效果
    xiaoDianji("#ceshi");
})

