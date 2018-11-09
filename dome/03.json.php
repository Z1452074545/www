<?php 
    header('Content-Type:application/json;charset=utf-8');

    $jsonString = file_get_contents('03.json');

    echo $jsonString;

    sleep(2);

    //echo $jsonString;

    /*json格式的字符串和php对象 相互转换*/

    /*json格式的字符串解析php对象*/
    //$jsonObject = json_decode($jsonString);

   // echo $jsonObject[0]->imgUrl;

     /*php对象转换json格式的字符串*/

     //$phpObject = array(array('name'=>'xzz'));

     //$json = json_encode($phpObject);

    // echo $json;
?>