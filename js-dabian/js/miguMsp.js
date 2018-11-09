/**
 * Created by Administrator on 2018/1/10.
 */

var myReg = document.getElementById('myReg');
var oshade = document.getElementById('oshade');
var login = document.getElementById('login');
var btn_x = document.getElementById('btn_x');
var False = document.querySelector('.False');
var sp_tijiao = document.querySelector('.sp_tijiao');
var sp_fanhui = document.querySelector('.sp_fanhui');

myReg.onclick = function () {
    oshade.style.display = "block";
    login.style.display = "block";
}
btn_x.onclick = function () {
    oshade.style.display = "none";
    login.style.display = "none";
    False.style.display = "none";

}
//输入错误提示

var False_x = document.querySelector('.False input');

var arrInp = document.querySelectorAll('.login_2 div input');

arrInp[0].onfocus = function () {
    arrInp[0].value = "";
    if (arrInp[0].value == "") {
        //arrInp[0].style.display="black";
    }

}
arrInp[1].onfocus = function () {
    arrInp[1].value = "";
    if (arrInp[1].value == "") {
        //arrInp[0].style.display="black";
    }

}
arrInp[2].onfocus = function () {
    arrInp[2].value = "";
    if (arrInp[2].value == "") {
        //arrInp[0].style.display="black";
    }

}
arrInp[0].onblur = function () {
    var reg0 =/^1\d{10}$/;
    var txt0 = arrInp[0].value;
    if (reg0.test(txt0)) {
        //console.log("输入正确");
        //True.style.display="block";
    }
    else if (txt0 == "") {
        False.style.display="block";
        if(False.style.display=="block"){
            False_x.onclick=function(){
                False.style.display="none";
            }
        }
    }else{
        False.style.display="block";
        console.log("输入错误11111111111111111");
        if(False.style.display=="block"){
            False_x.onclick=function(){
                False.style.display="none";
            }
        }
    }
}

arrInp[1].onblur = function () {
    //密码验证 最少以为字母大写 一个字母小写 一个特殊字符 一个数字 最少6位数
    var reg1 =/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    var txt1 = arrInp[1].value;
    if (reg1.test(txt1)) {
        //console.log("输入正确");
        //True.style.display="block";
    }
    else if (txt1 == "") {
        False.style.display="block";
        if(False.style.display=="block"){
            False_x.onclick=function(){
                False.style.display="none";
            }
        }
    }else{
        False.style.display="block";
        console.log("输入错误11111111111111111");
        if(False.style.display=="block"){
            False_x.onclick=function(){
                False.style.display="none";
            }
        }
    }
}

arrInp[2].onblur = function () {
    //四位数验证码
    var reg2 =/([0-9]{4})/;
    var txt2 = arrInp[2].value;
    if (reg2.test(txt2)) {
        //console.log("输入正确");
        //True.style.display="block";
    }
    else if (txt2 == "") {
        False.style.display="block";
        if(False.style.display=="block"){
            False_x.onclick=function(){
                False.style.display="none";
            }
        }
    }else{
        False.style.display="block";
        console.log("输入错误11111111111111111");
        if(False.style.display=="block"){
            False_x.onclick=function(){
                False.style.display="none";
            }
        }
    }
}

sp_tijiao.onclick=function(){
    alert("提交成功！");
    oshade.style.display="none"
    login.style.display="none";
}
sp_fanhui.onclick=function(){
    confirm("确认退出吗？");
    if(true){
        oshade.style.display="none"
        login.style.display="none";
    }else{
        oshade.style.display="block"
        login.style.display="block";
    }

}
var login_2=document.getElementById('login_2');
var login_3=document.getElementById('login_3');
var mimadlu=document.getElementById('mimadlu');
var duanxindlu=document.getElementById('duanxindlu');
//
//mimadlu.onclick=function(){
//    login_2.style.display="block";
//    login_2="log_li_bor";
//    login_3.style.display="none";
//    login_3.className="";
//}
//duanxindlu.onclick=function(){
//    login_2.style.display="none";
//    login_2.className="";
//    login_3.style.display="block";
//    login_3.className="log_li_bor";
//}


