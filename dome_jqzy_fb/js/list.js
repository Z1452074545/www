/**
 * Created by Administrator on 2018/2/1 0001.
 */
//引入头部和底部
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");

})

$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    var ajax = $("#box");
    var start = 0;
    var num = 6;
    var b = 1;
    function get_data(start,num){
        $.get('js/listone.json',function(data){
            data = eval(data);
//               data = JSON.parse(data);
            data = data["list"];
            console.log(data);
            var L = data.length;
            if ((start+num) > L){
                num = L - start;
                b = 0;
            }
            for(var i=start;i<(start+num);i++){
                var item = $("#itemHtml").html()
                    .replace("$articleId$",data[i].sysId)
                    .replace("$articleCover$",data[i].coverImg)
                    .replace("$articleTitle$",data[i].title)
                    .replace("$updateTime$",data[i].creatAt)
                    .replace("$describe$",data[i].describe);
                $("#articleList").append(item);
            }
        });
        return start+num;
    }
    start = get_data(start,num);
    $("#listMore").click(function(){
        if(b == 0){
            //$(".gomore").attr("src","images/list_gomore_bg_nomore.jpg");
            $(".gomore").attr("src","images/list_gomore_bg_nomore.jpg");
        }else{
            start = get_data(start,num);
        }
    })
})