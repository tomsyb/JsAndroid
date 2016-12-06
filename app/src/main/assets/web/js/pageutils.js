//服务器回调方法
function ajaxResultData(key){
	getAjaxData(key);
}
//回调后js去取得参数
function getAjaxData(key){
	var result=window.js.getByKeyData(key);//取值
	var funkey=window.js.getByKeyData(key+"_FUNCKEY");//取值
	//alertMsg(result);
	dosuccess(funkey,result);
}

//修改全局是否可执行事件
function cansinglefun(){
	var starttime=STARTTIME;
	var nowtime= new Date().getTime();
	if((nowtime-starttime)>3000){
		STARTTIME=nowtime;
		return true;
	}else{
		return false;
	}
}


//---------------------------------------------------------
//调用服务器方法
/**
 * 页面跳转
 * @param str 指定的activity类的全路径
 */
function hrefto(str){     
		window.js.href(str);//调用android的函数  
}

/**
 * 获取URL传过来的参数
 * @param key
 */
function getUrlparam(key){
	var value=window.js.getParamfromUrlByKey(key);
	return value;
}
/**
 * android提示
 * @param message
 */
function alertMsg(message){
	//alert(message);
	window.js.alertMsg(message);
}
/**
 * logs
 */
function e(message){
	console.log(message);
}
/**
 * 请求网络数据  ,请求地址，参数，缓存时间，区分不同的请求
 */
function ajaxDo(url,params,ctime,key){
	window.js.ajaxDo(url,params,ctime,key);
}
/**
*取设置中准备的数据
*/
function getDeviceData(key){
	var data=window.js.getDeviceData(key);
	//data='3';//这是模拟数据
	var data=dofuncdatawhat(data);
	return data;
} 
function getDeviceDataother(key){
	var data=window.js.getDeviceData(key);
	return data;
}
//查看内容是否存在，跳转到对应的页面
function dofuncdatawhat(data){
	var thisdata=data;
	if(data==2||data=='2'){//没网络
		IS_CAN_CLICK_PICS=false;
		thisdata=getDeviceDataother("error_no2");
	}else if(data==3||data=='3'){//没data
		IS_CAN_CLICK_PICS=false;
		thisdata=getDeviceDataother("error_no3");
	}else{
		IS_CAN_CLICK_PICS=true;
	}
	e(thisdata);
	return thisdata;
}
//点击打开设置网络页面
function z_setnetwork(){
	window.js.maindosetnetwork();
}
//点击重新发送网络请求
function z_getlastrequest(){
	window.js.maingetlastrequest();
}
/**
 * 让所有图片点击进入浏览
 */
var IS_TO_SET_PICS=false;
function lookpics(){
	IS_TO_SET_PICS=true;
	if(IS_CAN_CLICK_PICS){
		$("img").click(function(){
				hrefsall='';
				if(cansinglefun()){
					var thishref=$(this).attr('src');
					for(var i=0;i<$("img").length;i++){
						if($("img:eq("+i+")").parent().is("a")){
							$("img:eq("+i+")").parent().attr('href','javascript:void(0);');
						}
						var href= $("img:eq("+i+")").attr('src');
						hrefsall+=href+"#";			
					}
					hrefsall=hrefsall+'$'+thishref;
					window.js.lookOfpics(hrefsall);
				}
		});
	}
}


//以下为工具类-------------------
function isaddlookpic(result){
	if(result==''||result=='2'||result=='3'||result==2||result==3){
		IS_CAN_CLICK_PICS=false;
	}else{
		IS_CAN_CLICK_PICS=true;
		if(IS_TO_SET_PICS){
			lookpics();
		}
	}
}
	
function isnotnull(result){
	if(result==''||result=='2'||result=='3'||result==2||result==3){
		return false;
	}else{
		return true;
	}
}