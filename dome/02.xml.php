<?php 
    header('Content-Type:application/xml;charset=utf-8');

    /*字符串 通用*/
    /*xml 格式的字符串*/

    $xml = file_get_contents('02.xml');

    echo $xml;

    sleep(2);
?>