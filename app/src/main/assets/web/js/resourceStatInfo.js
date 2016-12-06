var level = "";
var type=1;


function getAndShowData(msg) {
    var list = eval(msg);
    var tdata = list.data; //得到列表

    var colorArry = ['bg1352e2', 'bgffa82c', 'bge0483e', 'bg22c064','bgB15BFF','bgff0080'];
    var total = 0;
    var agencyTotal = 0;
    var temp = "";
    var p = "";
    for (var i = 0; i <tdata.length ; i++) {
        var sname = (type == 1) ? tdata[i].htype : (type == 2) ? tdata[i].typetravel : (type == 3) ? tdata[i].slevelstr : tdata[i].tlevel;
        var scount = (type == 1 || type == 3 || type==4) ? tdata[i].total : tdata[i].travelcount;
        var unit = (type == 1 || type == 2 || type == 3) ? "&nbsp;&nbsp;家" : "&nbsp;&nbsp;人";
        var identifying=tdata[i].identifying;

//        if (!(type == 2 && i == tdata.length - 1)) {
            temp = '<li class="clearfix" style="background-color:white;" onclick="javascript:gotoList(' + "'" + sname + "'" +","+ "'"+identifying+"'"+')">\n';
            temp += '<span class="dot fl ' + colorArry[i] + '"></span>\n';
            temp += '<span class="jd-name fl font16 color666">' + sname + '</span>\n';
            temp += '<span class="fr">\n';
            temp += '<span class="jd-num font24 fwb color333 " >' + scount + '<span class="font16">' + unit + '</span></span><img src="images/jt.png" class="jt">\n';
            temp += '</span>\n';
            temp += '</li>\n';
//        }
        total =parseInt(total)+parseInt(scount) ;

//        $("#hotel_total").html(type == 2 ?total-parseInt(tdata[tdata.length - 1].travelcount): total);
        $("#hotel_total").html(total);
        $("#summaryinfos").append(temp);
    }

    $("li").on("touchstart", function () {
        $(this).css("background", "#acdbc1")
    });
    $("li").on("touchend", function () {
        $(this).css("background", "#fff");
    });

    $.each(tdata, function (i, n) {
//        if (!(type == 2 && i == tdata.length - 1)) {
            var sname = (type == 1) ? n.htype : (type == 2) ? n.typetravel : (type == 3) ? n.slevelstr  : n.tlevel;
            var sy = (type == 1 || type == 3 || type==4) ? n.total : n.travelcount;
            var identifying=n.identifying;
            if (i == 0) {
                p = "{name: \"" + sname + "\",y: " + sy +",id: \""+identifying+"\"}";
            } else {
                p += ",{name: \"" + sname + "\",y: " + sy + ",id: \""+identifying+"\"}";
            }
//        }
    });
    var options = {
        chart: {
            plotBackgroundColor: '#fcfcfc',
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#fcfcfc'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        tooltip: {//提示框样式
            backgroundColor: 'none', // 背景颜色
            borderColor: 'none',
            shadow: false,                 // 是否显示阴影
            animation: true,               // 是否启用动画效果
            style: {                      // 文字内容相关样式
                color: "none"
            }
        },
        plotOptions: {
            pie: {
                BackgroundColor: '#fcfcfc',
                allowPointSelect: true,
                cursor: 'pointer',
                enableMouseTracking: true, //是否显示提示框
                dataLabels: {
                    enabled: true,
                    color: '#333',
                    distance: 10, //通过设置这个属性，将每个小饼图的显示名称和每个饼图重叠
                    format: '{point.percentage:.1f}% <br><p>{point.name}</p>',
                    style: {
                        fontSize: '12px',
                        lineHeight: '12px'
                    }
                },
                events: {
                    click: function (e) {
                        //location.href = e.point.url;
                        level = e.point.name;
                        var identifying=e.point.id;
                        gotoList(level,identifying);
                    }
                }
            }
        },
        colors: ['#1352e2', '#ffa82c', '#e0483e', '#22c064','#B15BFF','#ff0080'],
        series: [{
            type: 'pie',
            data: eval('[' + p + ']')
        }]
    }
    $("#chart07").highcharts(options);
}
function gotoList(level,identifying) {
    htmlData.hrefAndBundle("com.daqsoft.android.emergentpro.scenery.SceneryListActivity?level=" + level + "&type=" + type + "&identifying=" + identifying);
}