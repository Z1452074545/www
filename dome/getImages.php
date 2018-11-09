<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
$page = $_GET['page'];
$images01 = array(
	array('name'=>'美景啊，美景','src'=>'images/image01.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image02.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image03.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image04.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image05.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image06.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image07.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image08.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image09.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image010.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image01.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image02.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image03.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image04.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image05.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image06.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image07.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image08.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image09.jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image010.jpg'),
);
$images02 = array(
	array('name'=>'美景啊，美景','src'=>'images/image01 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image02 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image03 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image04 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image05 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image06 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image07 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image08 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image09 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image010 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image01 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image02 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image03 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image04 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image05 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image06 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image07 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image08 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image09 (2).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image010 (2).jpg'),
);
$images03 = array(
	array('name'=>'美景啊，美景','src'=>'images/image01 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image02 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image03 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image04 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image05 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image06 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image07 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image08 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image09 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image010 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image01 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image02 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image03 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image04 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image05 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image06 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image07 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image08 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image09 (3).jpg'),
	array('name'=>'美景啊，美景','src'=>'images/image010 (3).jpg'),
);

if($page == 0){
	echo json_encode($images01);
}else if($page == 1){
	echo json_encode($images02);
}else if($page == 2){
	echo json_encode($images03);
}else{
	echo json_encode(array('err'=>'没有图片了'));
}

