var sceneryName="";

function sceneryOneHour(msg) {
                var list = eval(msg);

                var categoriesapi=new Array();
                var seriesapi=new Array();
                var rows=list.data;
                for(var i=0;i<rows.length;i++){
                    categoriesapi.push(rows[i].time);
                    seriesapi.push(rows[i].real);
                }

                $("#chart01").empty();
                var options = {//线性图
                    chart: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        renderTo: 'chart01'
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
                            format: '{value} 人',
                            style: {
                                fontSize: '8px',
                                color: '#333333',
                                align: 'right'
                            }
                        },
                        min:0

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

                $("#chart01").highcharts(options);
    }

function sceneryHistory(msg) {
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
                    chart: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        renderTo: 'chart03',
                        type: 'column'
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

    function ScenicFutureTeam(resourcecode) {
        $("#chart02").html(loading);
        $.ajax(
        { type: "POST",
            url: "sso.aspx?s=ScenicFutureTeam&resourcecode=" + resourcecode,
            async: true,
            timeout: 10000,
            success: function (msg) {

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
                        allowDecimals:false,
                        min: 0,
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
                        color: '#37B036',
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
            }, error: function (XMLHttpRequest, status) {
                $("#chart02").html(resetloading).show();
            }
        });
    }