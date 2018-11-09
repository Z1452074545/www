/**
 * Created by ���� on 2017/10/12.
 */

$(function() {
    $(".btn").on("click", function () {
        //$.ajax({
        //    type:"GET",
        //    url:"listData.json",
        //    dataType:"json",
        //    success:function(data){
        //        console.log(data)
        //        var _data = eval(data)
        //
        //        $.each(_data,function(i){
        //            console.log(_data[i])
        //            var oList = _data[i].data.list;
        //            console.log(oList)
        //            $.each(oList,function(i){
        //                console.log(oList[i])
        //                console.log(oList[i].coverImg)
        //                $("<li>" +
        //                    "<div class='li_left'>" +
        //                    "<img src='"+oList[i].coverImg+"' /></div>" +
        //                    "<div class='li_right'>" +
        //                    "<p class='p1'>"+oList[i].title+"</p>" +
        //                    "<p class='p2'>"+oList[i].creatAt+"</p>" +
        //                    "<p class='p3'>"+oList[i].describe+"</p></div></li>").appendTo("#box")
        //
        //
        //
        //            })
        //        })
        //
        //    },
        //
        //})

        //$.get("package.json",function(shuju){
        //    console.log(shuju)
        //    var a = eval(shuju)
        //    var olist = a.list
        //    console.log(olist)
        //    $.each(olist,function(i){
        //        console.log(olist[i].name)
        //        $("<p>"+olist[i].name+"</p>").appendTo("#box")
        //    })
        //})


        $.post("listData.json", function (shuju) {
            //console.log(shuju);
            //      ajax请求过来的其实是json字符串
            //      eval()    json字符串转换成json对象
            var _shuju = eval(shuju);
            $.each(_shuju, function (i) {
                var oList = _shuju[i].data.list;
                //console.log(oList)

                $.each(oList, function (i) {
                    var dongtingting = oList[i].coverImg;
                    console.log(dongtingting)

                    $("<li><div class='li_left'><img src='" + oList[i].coverImg + "' /></div>" +
                        "<div class='li_right'>" +
                        "<p class='p1'>" + oList[i].title + "</p>" +
                        "<p class='p2'>" + oList[i].creatAt + "</p>" +
                        "<p class='p3'>" + oList[i].describe + "</p></div></li>").appendTo("#box")

                })

            })

            })


        })
    })

