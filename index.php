<?php session_start();
/*!

# Doc
  
  [Getting Started](http://syue.cxm.tw/doc) [GitHub project](https://github.com/syuemingfang/syuemingfag-doc) [Documentation](http://comment.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfag-doc/master/comment.json)

****************************************************************************************************/

require('libs/Smarty.class.php');
$smarty=new Smarty;

require('class/base.php');
$main=new doc();
$smarty->assign('name', Doc);
$smarty->assign('repo', syuemingfag-doc);

$smarty->assign('main', 'template/index.tpl');
$smarty->display('template/master.tpl'); 
?>