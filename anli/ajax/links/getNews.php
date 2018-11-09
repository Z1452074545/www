<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('title'=>'优质VR内容和分发渠道——先有鸡还是先有蛋？','date'=>'2016-03-24'),
	array('title'=>'电竞造星差异化，不必“美女”或“奇葩”，T-REX电竞认为关键是「会玩」','date'=>'2016-03-24'),
	array('title'=>'为应用开发提供数据存储和实时通讯。','date'=>'2016-03-24'),
	array('title'=>'酒类B2C不赚钱，乐视网酒网的生态故事能讲通么？','date'=>'2016-03-24'),
	array('title'=>'为什么你的工具型产品规模做不大还难以变现？','date'=>'2016-03-24'),
	array('title'=>'优质VR内容和分发渠道——先有鸡还是先有蛋？','date'=>'2016-03-24'),
	array('title'=>'电竞造星差异化，不必“美女”或“奇葩”，T-REX电竞认为关键是「会玩」','date'=>'2016-03-24'),
	array('title'=>'为应用开发提供数据存储和实时通讯。','date'=>'2016-03-24'),
	array('title'=>'酒类B2C不赚钱，乐视网酒网的生态故事能讲通么？','date'=>'2016-03-24'),
	array('title'=>'为什么你的工具型产品规模做不大还难以变现？','date'=>'2016-03-24'),
);

echo json_encode($news);
