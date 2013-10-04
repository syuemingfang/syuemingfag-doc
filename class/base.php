<?php
/*!

## PHP

****************************************************************************************************/

//! 
//!### Class
class base{
	//!#### base
	public $version='0.0.1.0'; //!+ **version**
	public function __construct(){}
	public function createFile($fn, $str){
		//!+ **createFile**
		$f=fopen($fn, 'w');
		fwrite($f, $str);
		fclose($f);
	}
	public function readFile($fn){
		//!+ **readFile**
		$str=null;
		if(file_exists($fn)){
			$f=fopen($fn, 'r');
			if($f != null){
				while(!feof($f)){
					$str.=fgets($f);
				}
				fclose($f);
			}
		}
		return $str;
	}
}

?>