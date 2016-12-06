var mYear="2016";
var mMonth="";

var datas=new Array();//走趋图数据

//来九寨人数走势图
function yearComming(data){
//	data={"total":28,"permissionField":null,"rows":[{"total":89770,"month":"01","year":"2014"},{"total":100160,"month":"02","year":"2014"},{"total":194045,"month":"03","year":"2014"},{"total":149040,"month":"04","year":"2014"},{"total":218847,"month":"05","year":"2014"},{"total":218153,"month":"06","year":"2014"},{"total":250179,"month":"07","year":"2014"},{"total":247098,"month":"08","year":"2014"},{"total":192339,"month":"09","year":"2014"},{"total":250013,"month":"10","year":"2014"},{"total":211919,"month":"11","year":"2014"},{"total":214745,"month":"12","year":"2014"},{"total":236574,"month":"01","year":"2015"},{"total":324619,"month":"02","year":"2015"},{"total":202964,"month":"03","year":"2015"},{"total":223022,"month":"04","year":"2015"},{"total":185281,"month":"05","year":"2015"},{"total":196275,"month":"06","year":"2015"},{"total":250172,"month":"07","year":"2015"},{"total":264219,"month":"08","year":"2015"},{"total":197389,"month":"09","year":"2015"},{"total":223451,"month":"10","year":"2015"},{"total":219548,"month":"11","year":"2015"},{"total":218542,"month":"12","year":"2015"},{"total":1765006,"month":"01","year":"2016"},{"total":2542790,"month":"02","year":"2016"},{"total":961436,"month":"03","year":"2016"},{"total":1230118,"month":"04","year":"2016"}]};

	var years = eval(data);
	var months=years.data;

	var colors=["#55c654","#ff9c00","#ff5c00","#00aa55","#ff0000","#00ff00","#0000ff"];

	var yearArray=new Array();
	for(var i=0;i<months.length;i++){
		yearArray.push(months[i].year+"年");
	}

	yearArray=yearArray.unique();//去重
	mYear=yearArray[yearArray.length-1].replace("年",'');
	for(var i=0;i<yearArray.length;i++){
		var dataJson=new Array();
		for(var j=0;j<months.length;j++){
			if(yearArray[i]==(months[j].year+"年")){
				dataJson.push(Digit.round((months[j].total/10000),2));
			}
		}
		var year=yearArray[i].replace("年",'');
		var html='<a '+(i==yearArray.length-1?'class="curr"':'')+'  id="year_'+year+'" onclick=setClick('+year+')>'+yearArray[i]+'</a>';
		$(".nav_data").append(html);

		datas.push({name:yearArray[i],color:colors[i],data:dataJson});
	}
	 var months1 = [];

        for (var i = 0;i<months.length;i++) {
            var m = months[i];
            months1.push(m.month + '月');
        }
        options01.xAxis.categories = months1;
    	new Highcharts.Chart(options01);
    	htmlData.getBeforeSeven(mMonth,mYear);

}
//设置前7年份的点击事件
function setClick(year){
	mYear=year;
	$(".nav_data>a").removeClass("curr");
   	$("#year_"+year).addClass("curr");
   	htmlData.getBeforeSeven(mMonth,mYear);
}

//前七统计
function beforeSeven(result){
	setChart("before_seven",result);
}

function setChart(chartId,result){
//result={"total":7,"data":[{"source":"云南","thistotal":1559293,"month":null,"year":"2016"},{"source":"广东","thistotal":781209,"month":null,"year":"2016"},{"source":"重庆","thistotal":758171,"month":null,"year":"2016"},{"source":"浙江","thistotal":602546,"month":null,"year":"2016"},{"source":"上海","thistotal":401672,"month":null,"year":"2016"},{"source":"贵州","thistotal":285709,"month":null,"year":"2016"},{"source":"江苏","thistotal":268043,"month":null,"year":"2016"}]};
//result={"error":"参数错误"};

	var datas=eval(result).data;
	if(datas == undefined||datas.length==0){
		setDynamicWidth(chartId,0);
		$("#"+chartId).html(errorWebInfo);
		return;
	}else{
		var addr=new Array();
		var data=new Array();
		for(var i=0;i<datas.length;i++){
			addr.push(datas[i].source);
			var total=parseInt(datas[i].thistotal)/10000;
			data.push({y:Digit.round(total,2)});
		}
//		setDynamicWidth(chartId,data.length);
		showChart(chartId,addr,data);
	}
}

function showChart(id,addr,data){
	var options = {//柱状图
         	chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				type: 'column'
				//renderTo: 'chart01'
			},
			title: {
				text: null
			},
			tooltip: {
				enabled: false
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			plotOptions: {
				line: {
					color: '#69da67'
				},
				column: {
					color: '#69da67'
				}
			},
			xAxis: {
				categories: addr,
				gridLineWidth: 0.5,
				gridLineColor: '#f1f1f1',
				lineColor: '#3abc39',
				lineWidth: 0.5,
				tickWidth: 0.5,
				tickColor: '#3abc39',
				labels: {
					//rotation: -145,
					style: {

						fontSize: '10px',
						color: '#333333'
					}
				}

			},
			yAxis: {
				title: {
					text: ''
				},
				//tickPositions: tickPositionsapi, // 指定竖轴坐标点的值
				gridLineWidth: 0.5,
				gridLineColor: '#f1f1f1',
				lineColor: '#3abc39',
				lineWidth: 0.5,
				labels: {
					format: '{value} ',
					style: {
						fontSize: '8px',
						color: '#333333',
						align: 'right'
					}
				}
			},
			tooltip: {
				valueSuffix: '万人'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0,
				enabled: false
			},
			series: [{
				name: '来'+COMMON.name+'人数',
				data: data,
				dataLabels: {
					enabled: false,
					rotation: 0,
					color: '#000000',
					align: 'center',
					x: 0,
					y: 0,
					style: {
						fontSize: '13px'
					}
				}
			}]
         }
	$("#"+id).highcharts(options);
}

Highcharts.setOptions({
	lang: {
		numericSymbols: null
	}
});
var options01 = {//线性图
	chart: {
		backgroundColor: 'rgba(0,0,0,0)',
		renderTo: 'people_trend'
	},
	title: {
		text: null
	},
	credits:{
		enabled:false
	},
	exporting:{
		enabled:false
	},
	xAxis: {
		min: 0,
		categories: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
		gridLineWidth: 0.5,
		gridLineColor:'#f1f1f1',
		lineColor: '#3abc39',
		lineWidth: 0.5,
		tickWidth: 0.5,
		tickColor: '#3abc39',
		labels:{

			rotation: -45,
			style:{
				fontSize:'10px',
				color:'#333333'
			}
		}

	},
	yAxis: {
		title: {
			text: ''
		},
		min: 0,
//		tickPositions: [0, 1000, 2000, 3000,4000,5000,6000], // 指定竖轴坐标点的值(注释掉则自动设置)
		gridLineWidth: 0.5,
		gridLineColor:'#f1f1f1',
		lineColor: '#3abc39',
		lineWidth: 0.5,
		labels:{
			style:{
				fontSize:'8px',
				color:'#333333',
				align:'right'
			}
		}
	},
	tooltip: {
		valueSuffix: '万人',
		useHTML: true,
		pointFormat:'<ul class="tip_ul"><li class="clearfix" style="color:{point.series.color}"><label class="test">人数：</label><span>{point.y}</span></li>',
		footerFormat: '</ul>',

	},
	legend: {
		align: 'center',
		verticalAlign: 'bottom',
		borderWidth: 0,
		enabled:true,
		margin:0
	},
	series:datas
}
