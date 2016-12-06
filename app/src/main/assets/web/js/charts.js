// JavaScript Document
Highcharts.setOptions({ 
    lang: { 
          numericSymbols: null 
    } 
});
var options01 = {//柱状图
	chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				type:'column',
				//renderTo: 'chart01'
			},
			title: {
				text: null
			},
			tooltip: {
				enabled:false
			},
			credits:{
				enabled:false
				},
			exporting:{
				enabled:false
				},
			plotOptions: {
				line: {
					color:'#69da67'
				},
				column: {
					color:'#69da67'
				}
			},
            xAxis: {
                categories: ['都江堰-青城山', '九寨沟', '黄龙', '乐山峨眉山', '稻城亚丁', '6月'],
				gridLineWidth: 0.5,
				gridLineColor:'#f1f1f1',
				lineColor: '#3abc39',
				lineWidth: 0.5,
				tickWidth: 0.5,
				tickColor: '#3abc39',
				labels:{
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
				tickPositions: [0, 1000, 2000, 3000,4000,5000,6000], // 指定竖轴坐标点的值
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
                //valueSuffix: '人',
				formatter: function() {  
                   return  this.series.name + "<br>" +this.y+"人";  
           		}  

            },
			
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
				enabled:false
            },
            series: [{
                name: '当前实时人数',
                data: [1000, 3000, 2000, 4000, 6000, 5000],
				dataLabels: {
					enabled: false,
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
	
var options02 = {//线性图柱状图在同一表里
	chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				//renderTo: 'chart02'
			},
			title: {
				text: null
			},
			tooltip: {
				enabled:false
			},
			credits:{
				enabled:false
				},
			exporting:{
				enabled:false
				},
			plotOptions: {
				line: {
					color:'#69da67'
				},
				column: {
					color:'#69da67'
				}
			},
            xAxis: {
                categories: ['都江堰-青城山', '九寨沟', '黄龙', '乐山峨眉山', '稻城亚丁', '6月'],
				gridLineWidth: 0.5,
				gridLineColor:'#f1f1f1',
				lineColor: '#3abc39',
				lineWidth: 0.5,
				tickWidth: 0.5,
				tickColor: '#3abc39',
				labels:{
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
				tickPositions: [0, 1000, 2000, 3000,4000,5000,6000], // 指定竖轴坐标点的值
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
                valueSuffix: '人'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
				enabled:false
            },
            series: [{
                name: '旅行团队',
				type:'column',
                data: [500, 2600, 1800, 3800, 5500, 4000],
				dataLabels: {
					enabled: false,
					color: '#000000',
					align: 'center',
					x: 0,
					y: 0,
					style: {
						fontSize: '13px'
						}
            	}
            },{
				name:'团队人数',
				type:'line',
                data: [1500, 3200, 2600, 4100, 6000, 5010],
				dataLabels: {
					enabled: false,
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


var options03 = {//线性图
	chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				renderTo: 'chart03'
			},
			title: {
				text: null
			},
			tooltip: {
				enabled:false
			},
			credits:{
				enabled:false
				},
			exporting:{
				enabled:false
				},
			plotOptions: {
				line: {
					color:'#69da67'
				},
				column: {
					color:'#69da67'
				}
			},
            xAxis: {
                categories: ['都江堰-青城山', '九寨沟', '黄龙', '乐山峨眉山', '稻城亚丁', '6月'],
				gridLineWidth: 0.5,
				gridLineColor:'#f1f1f1',
				lineColor: '#3abc39',
				lineWidth: 0.5,
				tickWidth: 0.5,
				tickColor: '#3abc39',
				labels:{
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
				tickPositions: [0, 1000, 2000, 3000,4000,5000,6000], // 指定竖轴坐标点的值
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
                valueSuffix: '人'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
				enabled:false
            },
            series: [{
                name: '近7天实时人数',
                data: [1000, 3000, 2000, 4000, 6000, 5000],
				dataLabels: {
					enabled: false,
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
//线性图方块
var options04 = {
	chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				renderTo: 'chart04',
			},
			title: {
				text: null
			},
			tooltip: {
				enabled:false
			},
			credits:{
				enabled:false
				},
			exporting:{
				enabled:false
				},
			plotOptions: {
				line: {
					color:'#69da67',
					marker:{symbol:'square'},
				},
			},
            xAxis: {
                categories: ['1', '2', '3', '4', '5', '6',
                    '7', '8', '9', '10'],
				gridLineWidth: 1,
				gridLineColor:'#f1f1f1',
				minorTickInterval: 'auto',
				lineColor: '#3abc39',
				lineWidth: 1,
				tickWidth: 1,
				tickColor: '#3abc39',
				labels:{
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
				tickPositions: [0, 1000, 2000, 3000,4000,5000,6000,7000,8000,9000], // 指定竖轴坐标点的值
				minorTickInterval: 'auto',
				gridLineWidth: 1,
				gridLineColor:'#f1f1f1',
				lineColor: '#3abc39',
				lineWidth: 1,
				labels:{
					style:{
						fontSize:'8px',
						color:'#333333',
						align:'right'
						}
					}


            },
            tooltip: {
                valueSuffix: '人'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
				enabled:false
            },
            series: [{
                name: '关注度',
                data: [5043, 3562, 4078, 5236, 3369, 3948,5124,6687,7852,4517],
				dataLabels: {
					enabled: true,
					color: '#69da67',
					align: 'center',
					x: 0,
					y: 0,
					style: {
						fontSize: '10px'
						}
            	}
            }]
	}
	
//饼图
var options05 = {
	chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				type: 'pie',
				renderTo: 'chart05',
			},
			title: {
				text: null
			},
			tooltip: {
				enabled:false
			},
			credits:{
				enabled:false
				},
			exporting:{
				enabled:false
				},
			plotOptions: {
				 pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false,
						format: '{point.name}'
					}
				}
			},
            
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            series: [{
                name: '网络评价',
				type:'pie',
                data: [
					{name:'正面',  y:58.0,sliced: true, color:'#5ed35d'},
					{
						name: '负面',
						y: 40,
						sliced: true,
						selected: true,
						color:'#6f9ff5'
					},
					{name:'中性', sliced: true, y:2, color:'#ebab3b'},
            	],
				dataLabels: {
					enabled: true,
					color: '#000000',
					align: 'center',
					x: 0,
					y: 0,
					style: {
						fontSize: '10px'
						}
            	}
            }]
	}
var options06 = {//两条线性图在同一表里
	chart: {
				backgroundColor: 'rgba(0,0,0,0)'
			},
			title: {
				text: null
			},
			tooltip: {
				enabled:false
			},
			credits:{
				enabled:false
				},
			exporting:{
				enabled:false
				},
			
            xAxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
				gridLineWidth: 0.5,
				gridLineColor:'#f1f1f1',
				lineColor: '#3abc39',
				lineWidth: 0.5,
				tickWidth: 0.5,
				tickColor: '#3abc39',
				labels:{
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
				tickPositions: [0, 1000, 2000, 3000,4000,5000,6000], // 指定竖轴坐标点的值
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
                valueSuffix: '人'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
				enabled:false
            },
            series: [{
                name: '旅行团队',
				type:'line',
                data: [500, 2600, 1800, 3800, 5500, 4000],
				color:'#55c654',
				dataLabels: {
					enabled: false,
					color: '#000000',
					align: 'center',
					x: 0,
					y: 0,
					style: {
						fontSize: '13px'
						}
            	}
            },{
				name:'团队人数',
				type:'line',
                data: [1500, 3200, 2600, 4100, 6000, 5010],
				color:'#ff9b25',
				dataLabels: {
					enabled: false,
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
	
	
	
	//三期饼图
	
	var options07={
		
		chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,

        },
        title: {
            text: ''
        },
		credits:{
     enabled:false // 禁用版权信息
		},	
        tooltip: {
    	    pointFormat: '{series.name}<br><p>{series.data}</p>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#333',
					distance: 10,//通过设置这个属性，将每个小饼图的显示名称和每个饼图重叠
                    format: '{point.percentage:.1f} <br><p>{point.name}</p>',
					style:{
						fontSize:'12px',
						lineHeight: '12px'  
						}

                },
			   events: {
            click: function(e) {
        			location.href = e.point.url;
               
        			}
    }
				
            }
        },
		colors:['#e0483e','#ffa82c','#1352e2'],
        series: [{
            type: 'pie',
            data: [
                {name:'AAAAA级景区',y:76,url:'http://www.baidu.com'},
        		{name:'AAA及以下',y:54,url:'http://www.baidu.com'},
        		{name:'AAAA级景区',y:20,url:'http://www.baidu.com'}
				
           
            ]
        }]
		
		}
		
		
	//三期饼图
	
	var options08={
		
		chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,

        },
        title: {
            text: ''
        },
		credits:{
     enabled:false // 禁用版权信息
		},	
        tooltip: {
    	    pointFormat: '{series.name}<br><p>{series.data}</p>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#fff',
					distance: -40,//通过设置这个属性，将每个小饼图的显示名称和每个饼图重叠 
                    format: '{point.percentage:.1f} <br><p>{point.name}</p>',
					style:{
						fontSize:'12px',
						lineHeight: '12px'  
						}

                },
			   events: {
            click: function(e) {
        			location.href = e.point.url;
               
        			}
    }
				
            }
        },
		colors:['#1352e2','#22c064'],
        series: [{
            type: 'pie',
            data: [
                {name:'出境',y:76,url:'http://www.baidu.com'},
        		{name:'赴台',y:54,url:'http://www.baidu.com'},

				
           
            ]
        }]
		
		}
	
