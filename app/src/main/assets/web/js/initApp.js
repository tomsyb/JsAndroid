//全局变量
//服务器地址 要取得服务器地址，请用getURL();
var SERVERPATH=null;
function getURL(){
	if(SERVERPATH==null){
		SERVERPATH=window.js.getUrlPath();
	}
	return SERVERPATH;
}
//全局是否可执行事件
var SINGLEFUN=true;
//事件操作的时候
var STARTTIME=0;

//是否可以点击图片事件
var IS_CAN_CLICK_PICS=true;