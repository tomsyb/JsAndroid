var resourcecode = "";
var sceneryName="";
/*各景区当日累计人数统计*/
function sceneriesToday(msg) {
        $("#info0,#info1,#info2").html("");
        var list = eval(msg);

        $("#info0").html(list.real);
        $("#info1").html(list.count);
        $("#info2").html(list.amount);
        var tdata = list.data;

        var temp = '<a href="scenicreal.html?resourcecode={5}&sceneryName={6}"><div class="halfDiv bgco01 am02 {4}">\n';
        temp += '<h1 class="ph1 tbgc01">{0}</h1>\n';
        temp += '<div class="pOne"><p class="p01"><span class="fs01">{1}</span></p></div>\n';
        temp += '<hr class="bor_2">\n';
        temp += '</div></a>\n';

        for (var i = 0; i < tdata.length; i++) {
            //fl fr
            var htmls = temp.replace("{0}", tdata[i].name).replace("{1}", tdata[i].result).replace("{2}", tdata[i].count).replace("{3}", tdata[i].amount);
            if (i % 2 == 0) { htmls = htmls.replace("{4}", "fl"); } else { htmls = htmls.replace("{4}", "fr"); }
            htmls = htmls.replace("{5}", tdata[i].resourcecode).replace("{6}",escape(tdata[i].name));
            $("#elist").append(htmls);
        }
}

/*近7天景区门禁汇总统计图*/
function sceneriesHistory(msg) {
                var list = eval(msg);
                var categoriesapi=new Array();
                var seriesapi=new Array();
                var rows=list.data;
                for(var i=0;i<rows.length;i++){
                    categoriesapi.push(rows[i].time);
                    seriesapi.push(rows[i].real);
                }

                $("#chart03").empty();
                var options = {//线性图

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
                        categories: categoriesapi,
                        gridLineWidth: 0.5,
                        gridLineColor: '#f1f1f1',
                        lineColor: '#3abc39',
                        lineWidth: 0.5,
                        tickWidth: 0.5,
                        tickColor: '#3abc39',
                        labels: {
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
                        allowDecimals: false,
                        gridLineWidth: 0.5,
                        gridLineColor: '#f1f1f1',
                        lineColor: '#3abc39',
                        lineWidth: 0.5,
                        labels: {
                            format: '{value}人',
                            style: {
                                fontSize: '8px',
                                color: '#333333',
                                align: 'right'
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
                        enabled: false
                    },
                    series: [{
                        name: '人数',
                        data: seriesapi,
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
                $("#chart03").highcharts(options);
}

function FutureTeam(msg) {

                var list = eval(msg);
                var categoriesapi = eval(list[0].categoriesapi);
                var seriesapi = eval(list[0].seriesapi);
                var dataapi = eval(list[0].dataapi);
                $("#chart02").empty();
                var options = {

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
                    xAxis: [{
                        categories: categoriesapi,
                        gridLineWidth: 0.5,
                        gridLineColor: '#f1f1f1',
                        lineColor: '#3abc39',
                        lineWidth: 0.5,
                        tickWidth: 0.5,
                        tickColor: '#3abc39'
                    }],
                    yAxis: [{ // Primary yAxis
                        gridLineWidth: 0.5,
                        gridLineColor: '#f1f1f1',
                        lineColor: '#3abc39',
                        lineWidth: 0.5,
                        tickWidth: 0.5,
                        tickColor: '#3abc39',
                        labels: {
                            format: '{value} 个',
                            style: {
                                color: '#333333'
                            }
                        },
                        min: 0,
                        allowDecimals: false,
                        title: {
                            text: '',
                            style: {
                                color: '#89A54E'
                            }
                        }
                    }, { // Secondary yAxis
                        title: {
                            text: '',
                            style: {
                                color: '#4572A7'
                            }
                        },
                        labels: {
                            format: '{value} 人',
                            style: {
                                color: '#333333'
                            }
                        },
                        opposite: true
                    }],
                    tooltip: {
                        shared: true
                    },
                    series: [{
                        name: '人数',
                        color: '#69da67',
                        type: 'column',

                        yAxis: 1,
                        data: dataapi,
                        tooltip: {
                            valueSuffix: ' 人'
                        },
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

                    }, {
                        name: '团队数',
                        color: '#37B036', //线颜色
                        type: 'spline',
                        data: seriesapi,
                        tooltip: {
                            valueSuffix: '个'
                        },
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

                $("#chart02").highcharts(options);
}

/*景区近1小时数据统计*/
function sceneriesOneHour(msg) {

//            msg={"total":19,"data":[{"resourcecode":"C12000000016","result":5253,"maxpeople":"100000","name":"宁园"},{"resourcecode":"C12000000010","result":513,"maxpeople":"30681","name":"石家大院"},{"resourcecode":"C12011400107","result":4994,"maxpeople":"50000","name":"佛罗伦萨小镇"},{"resourcecode":"C12000000013","result":5248,"maxpeople":"34899","name":"天津滨海航母主题公园"},{"resourcecode":"C12000000024","result":300,"maxpeople":"26213","name":"平津战役纪念馆"},{"resourcecode":"C12000000008","result":2985,"maxpeople":"42417","name":"天塔"},{"resourcecode":"C12000000015","result":1279,"maxpeople":"24621","name":"天津之眼"},{"resourcecode":"C12010500108","result":2307,"maxpeople":"23521","name":"意风区"},{"resourcecode":"C12000000021","result":2029,"maxpeople":"28441","name":"凯旋王国"},{"resourcecode":"C12000000027","result":8209,"maxpeople":"24454","name":"希乐城"},{"resourcecode":"C12000000001","result":3029,"maxpeople":"50000","name":"古文化街"},{"resourcecode":"C12000000020","result":1306,"maxpeople":"31010","name":"周邓纪念馆"},{"resourcecode":"C12000000007","result":7697,"maxpeople":"47486","name":"水上公园"},{"resourcecode":"C12000000002","result":7210,"maxpeople":"36857","name":"天津盘山风景名胜区"},{"resourcecode":"C12000000093","result":695,"maxpeople":"38546","name":"光合谷旅游度假村"},{"resourcecode":"C12000000035","result":802,"maxpeople":"24217","name":"万源龙顺庄园"},{"resourcecode":"C12000000006","result":2749,"maxpeople":"45537","name":"热带植物观光园"},{"resourcecode":"C12000000041","result":6025,"maxpeople":"34759","name":"华侨城欢乐谷"},{"resourcecode":"C12000000023","result":3814,"maxpeople":"28840","name":"精武门"}]};
                var list = eval(msg);

                var categoriesapi=new Array();
                var seriesapi=new Array();
                var rows=list.data;
                for(var i=0;i<rows.length;i++){
                    categoriesapi.push(rows[i].name);
                    seriesapi.push(rows[i].result);
                }

                $("#chart01").empty();
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
                        categories: categoriesapi,
                        gridLineWidth: 0.5,
                        gridLineColor: '#f1f1f1',
                        lineColor: '#3abc39',
                        lineWidth: 0.5,
                        tickWidth: 0.5,
                        tickColor: '#3abc39',
                        allowDecimals: false,
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
                            format: '{value} 人',
                            style: {
                                fontSize: '8px',
                                color: '#333333',
                                align: 'right'
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
                        enabled: false
                    },
                    series: [{
                        name: '人数',
                        data: seriesapi,
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
                setDynamicWidth("chart01",categoriesapi.length);
                $("#chart01").highcharts(options);
}
