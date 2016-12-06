
/**
   * scroNum 数字滚动方法
   * @param 选择器名字
   * @param 数字大小   
   * return null
   */	
function scroNum(scroID,number){//数字滚动
	var $num_item = $(scroID).find(".dataOne>div");
	//var h = $(".dataOne").height().toFixed(5); 
  
	var h=4.3; 
	
	$num_item.css('transition','all 2s ease-in-out');
	var numberStr = number.toString();
	if(numberStr.length < $num_item.length /*- 1*/){//TODO 修改了-1
		var tempStr = "";
		for(var a = 0; a < $num_item.length - numberStr.length; a++){
			tempStr += "0";
		}
		numberStr = tempStr + numberStr;
	}
	var numberArr = numberStr.split("");
	$num_item.each(function(i, item) {
        setTimeout(function(){
				
				//$num_item.eq(i).css('top',-$num_item.eq(i).attr('t') - h + 'px');
				$num_item.eq(i).css('top',-parseInt(numberArr[i])*h - h*10 + 'rem');
			},i*100) 
    });
}

$(document).ready(function(e) { 
//   scroNum("#team_data", totTourist);
	$(".table_year td").click(function(){
		$(this).parents("table").find("td").removeClass("curr"); 
		$(this).addClass("curr");
   });
   $(".nav_data>a").click(function(){
	   $(".nav_data>a").removeClass("curr");
	   var ind=$(this).index();
	   $(".div_box").hide();
	   $(".div_box").eq(ind).show();
	   $(this).addClass("curr");
   });

});