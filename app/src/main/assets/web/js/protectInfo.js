var tdata = "";
var data = "";

function protectData(info) {
    $("#bar_chart").html("");
    $("#chart_addr").html("");
    tdata = info.weatherInfo;
    size = tdata.length; //得到列表

    if(size==0){
        document.getElementById('show_nodata').setAttribute("style","display");
        document.getElementById('style1').setAttribute("style","display:none");
        document.getElementById('style2').setAttribute("style","display:none");
        return;
    }else {
        document.getElementById('show_nodata').setAttribute("style","display:none");
    }
    if(size<=8){
        document.getElementById('style1').setAttribute("style","display");
        document.getElementById('style2').setAttribute("style","display:none");
        setStyle1Data();
    }else{
        $("#style2").html('');
        document.getElementById('style1').setAttribute("style","display:none");
        document.getElementById('style2').setAttribute("style","display");
        setStyle2Data();
    }
}
//设置柱状图的点击事件
function barClick(num) {
    setData(num);
}

function setStyle2Data(){
    var temp="";
    $.each(tdata,function (i,n){
        var aqi=n.aqi.aqi;
        var aqiInfo=getAqiInfo(aqi);
        var aqiStyle=aqi<51?"good":aqi>=51&&aqi<101?"liang":aqi>=101&&aqi<151?"qing":aqi>=151&&aqi<201?"zhong":aqi>=201&&aqi<301?"bad":"bad";

       temp=' <li class="'+aqiStyle+'" onclick="javascript:showPop(' + i + ')">\n';
       temp+='    <a>\n';
       temp+='        <span class="hbsj_tit2">'+n.basic.name+'</span>\n';
       temp+='        <span class="hbsj_aqi2"><span>'+aqi+'</span>'+aqiInfo+'</span>\n';
       temp+='    </a>\n';
       temp+='</li>\n';

       $("#style2").append(temp);
    });
    //点击出详情
    $(".hbsj_lst2 li").on("click",function(){
        $(".hbsj_lst2 li").children("a").removeClass("curr");
        $(this).children("a").addClass("curr");
        $(".hbsj_ceng,.hbsj_pop").fadeIn(100);
    });
}

function showPop(num){
    var obj = tdata[num];
    $("#pop_city").html(obj.basic.name);
    var aqi=obj.aqi.aqi;
    $("#pop_aqi_info").html(getAqiInfo(aqi));
    $("#pop_aqi_num").html(Digit.round(obj.aqi.aqi,2));
    $("#pop_aqi_level").html(obj.qlty);
    $("#pop_time").html(obj.timepoint + "   监测");
    $("#pop_pm25").html(Digit.round(obj.aqi.pm25,2));
    $("#pop_pm10").html(Digit.round(obj.aqi.pm10,2));
    $("#pop_no2").html(Digit.round(obj.aqi.no2,2));
    $("#pop_so2").html(Digit.round(obj.aqi.so2,2));
    $("#pop_co").html(Digit.round(obj.aqi.co,2));
    $("#pop_o3").html(Digit.round(obj.aqi.o3,2));
}

function setStyle1Data(){
    var temp = "";
    var addr = "";
    var width=100/tdata.length;
    $.each(tdata, function (i, n) {
            temp = ' <div class="zzt fl ' + (i != 0 ? "mt15" : "") + '" onclick="javascript:barClick(' + i + ')" style="width:'+width+'%;">\n';
            temp += ' <span class="zzt-line di ' + (i == 0 ? "bgfad429" : i == 3 ? "bgffa640" : i == 5 ? "bgec5c13" : i == 6 ? "bg970253" : "bg66cb03") + '"></span>\n';
            temp += ' <p class="mt10 font16">' + n.aqi.aqi + '</p>\n';
            temp += ' </div>\n';
            $("#bar_chart").append(temp);

            addr = '<a class="hbsjNav-item fl" style="width:'+width+'%;" onclick="javascript:barClick(' + i + ')"><span class="hbsjNav-address di fon11 ' + (i == 0 ? "bg0f3d7e" : "") + '">' + n.basic.name + '</span></a>\n';
            $("#chart_addr").append(addr);
        });
        setData(0); //设置初始值
        //中间数据部分切换
        $(".hbsjNav-item").click(function () {
            var n = $(this).index();
            var w = $(".hbsjNav-item").width();
            $(".hbsjNav-item span").removeClass("bg0f3d7e");
            $(this).find("span").addClass(" bg0f3d7e");
            $(".zzt").addClass("mt15");
            $(".zzt").eq(n).removeClass("mt15");
            $(".smIC").css("left", n * w + w / 3);
            $(".zzt").find("p").removeClass("color65cc02");
            $(".zzt").find("p").removeClass("font21");
            $(".zzt").eq(n).find("p").addClass("color65cc02");
            $(".zzt").eq(n).find("p").addClass("font21");
        })
        $(".zzt").click(function () {
            var n2 = $(this).index();
            var w = $(".hbsjNav-item").width();
            $(".zzt").addClass("mt15");
            $(this).removeClass("mt15");
            $(".hbsjNav-item span").removeClass("bg0f3d7e");
            $(".hbsjNav-item span").eq(n2).addClass("bg0f3d7e");
            $(".smIC").css("left", n2 * w + w / 3);
            $(".zzt").find("p").removeClass("color65cc02");
            $(".zzt").find("p").removeClass("font21");
            $(this).find("p").addClass("color65cc02");
            $(this).find("p").addClass("font21");
        })
}

//数据填充
function setData(num) {
    var obj = tdata[num];
    $("#cityName").html(obj.basic.name);
    var aqi=obj.aqi.aqi;
    $("#weather_state").html(getAqiInfo(aqi)); //TODO 已完善（9.14）
    $("#aqiNum").html(Digit.round(obj.aqi.aqi,2));
    $("#pollute_level").html(obj.qlty);
    $("#monitor_time").html(obj.timepoint + "   监测");
    $("#pm25_num").html(Digit.round(obj.aqi.pm2_5,2));
    $("#pm10_num").html(Digit.round(obj.aqi.pm_10,2));
    $("#NO2_num").html(Digit.round(obj.aqi.no_2,2));
    $("#SO2_num").html(Digit.round(obj.aqi.so_2,2));
    $("#CO_num").html(Digit.round(obj.aqi.co,2));
    $("#O3_num").html(Digit.round(obj.aqi.o3,2));
}

function setDefault() {
    $("#cityName").html("未知");
    $("#weather_state").html("未知"); 
    $("#aqiNum").html("");
    $("#pollute_level").html("");
    $("#monitor_time").html("   监测");
    $("#pm25_num").html("");
    $("#pm10_num").html("");
    $("#NO2_num").html("");
    $("#SO2_num").html("");
    $("#CO_num").html("");
    $("#O3_num").html("");
}

function getAqiInfo(aqi){
    var info=aqi<51?"优":aqi>=51&&aqi<101?"良":aqi>=101&&aqi<151?"轻度":aqi>=151&&aqi<201?"中度":aqi>=201&&aqi<301?"重度":"严重";
    return info;
}