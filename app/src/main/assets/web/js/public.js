/*如果为IOS APPTYPE = "IOS" ------  安卓 APPTYPE = "Android";*/
/*要用此框架方法都需要引入 jquery-1.6.js*/

var APPTYPE = "Android";

var imageRootUrl = "http://117.8.230.14/SEM/";
var errorWebInfo='<p style="text-align:center;width:100%;padding-top:20px;color: #333333;font-size: 1.4rem;">暂无相关数据</p>';

//浏览图片列表
function AppReviewPicList(hrefsall) {
    if (APPTYPE == "Android") {
        window.js.lookOfpics(hrefsall);
    } else if (APPTYPE == "IOS") {

    } else if (APPTYPE == "WEB") {

    }
}

//打电话
function APPCallPhone(phonenumber) {
    if (APPTYPE == "Android") {
        window.phone.callPhonebyNumber(phonenumber);
    } else if (APPTYPE == "IOS") {
        callOfphone(phonenumber);
    } else if (APPTYPE == "WEB") {

    }
}

/*obj == 标签名称   如果大标签样式为 “.content” 调用方法为 ReviewPicList('.content img')*/
/*obj == 标签名称   如果大标签ID为 “content” 调用方法为 ReviewPicList('#content img')*/
function ReviewPicList(obj) {
    $(obj).live("click", function () {
        hrefsall = '';
        var descall = '';
        var thishref = $(this).attr('src');

        if (thishref.indexOf("http") < 0) thishref = $(this).attr('src');

        for (var i = 0; i < $(obj).length; i++) {
            if ($(obj + ":eq(" + i + ")").parent().is("a")) {
                $(obj + ":eq(" + i + ")").parent().attr('href', 'javascript:void(0);');
            }
            var href = $(obj + ":eq(" + i + ")").attr('src');

            if (href.indexOf("http") < 0) href = $(obj + ":eq(" + i + ")").attr('src');


            hrefsall += href + "#";

            var title = $(obj + ":eq(" + i + ")").attr('title');
            if (title == "" || typeof (title) == "undefined") title = "图片" + (i + 1);
            if (descall == "") {
                descall = title;
            } else {
                descall += "#" + title;
            }
        }
        //所有图片连接地址以#号分开$当前显示的地址$所有图片描述以#号为开
        hrefsall = hrefsall + '$' + thishref + '$' + descall;
        AppReviewPicList(hrefsall);
    });
}

///网页图片预加载
//调用方法 1 引用 jquery.lazyload.js 到网页
//         obj == 标签名称   如果大标签样式为 “.content” 调用方法为 ImagePreLoading('.content img')
//         obj == 标签名称   如果大标签ID为 “content” 调用方法为 ImagePreLoading('#content img')
function ImagePreLoading(obj) {
    $(obj).lazyload({ placeholder: "/images/logo.png?v=1", effect: "fadeIn" });
}

//清除内容中的所有样式
function RemoveStyle(obj) {
    $(id + " span").removeAttr("style");
    $(id + " div").removeAttr("style");
    $(id + " li").removeAttr("style");
    $(id + " ul").removeAttr("style");
    $(id + " p").removeAttr("style");
    $(id + " span").removeClass();
    $(id + " div").removeClass();
    $(id + " li").removeClass();
    $(id + " ul").removeClass();
    $(id + " p").removeClass();
}

function CallPhone(obj) {

    var body = "15928158929,15928158929中华人民共和国1534324sdfsd13488900981213213213/..028-85366080,13488900987";
    var newbody = body;
    var p;
    var phone = /1[3|4|5|7|8][0-9]\d{4,8}\b/;
    phone = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
    while (r = phone.exec(body)) {
        body = body.substring(r.index + r.length, body.length)
        console.log(r[0]);
        
    }

    //newbody = newbody.replace(r[0], "<font class=\"calltel\">" + r[0] + "</a>");
}

/**获取url地址携带过来的参数*/
function getParameter(paraStr, url) {
    var result = "";
    //获取URL中全部参数列表数据
    if(url == "") url = document.location.href;
    var str = "&" + url.split("?")[1];
    var paraName = paraStr + "=";
    //判断要获取的参数是否存在
    if (str.indexOf("&" + paraName) != -1) {
        //如果要获取的参数到结尾是否还包含“&”
        if (str.substring(str.indexOf(paraName), str.length).indexOf("&") != -1) {
            //得到要获取的参数到结尾的字符串
            var TmpStr = str.substring(str.indexOf(paraName), str.length);
            //截取从参数开始到最近的“&”出现位置间的字符
            result = TmpStr.substr(TmpStr.indexOf(paraName), TmpStr.indexOf("&") - TmpStr.indexOf(paraName));
        }
        else {
            result = str.substring(str.indexOf(paraName), str.length);
        }
    }
    else {
        result = "无此参数";
    }
    return (result.replace("&", "").split("=")[1]);
}

/**获取url地址携带过来的参数*/
function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null)
            return unescape(r[2]);
        return null;
}

/*去重*/
Array.prototype.unique = function(){
     this.sort(); //先排序
     var res = [this[0]];
     for(var i = 1; i < this.length; i++){
      if(this[i] !== res[res.length - 1]){
       res.push(this[i]);
      }
     }
     return res;
}

//动态设置柱状图宽度比例
function setDynamicWidth(id,size){
    var widthSize=size<=5?20:size>15?15:18;
    widthSize=widthSize*size>=100?widthSize*size:100;
    document.getElementById(id).style.width = widthSize + "%";
}

//保留两位小数
var Digit = {};
Digit.round = function(digit, length) {
    length = length ? parseInt(length) : 0;
    if (length <= 0) return Math.round(digit);
    digit = Math.round(digit * Math.pow(10, length)) / Math.pow(10, length);
    return digit;
};






