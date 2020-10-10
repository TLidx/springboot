// JavaScript Document
var hostx = location.hostname;
var idxx = hostx.indexOf(".");
var domainnamex = hostx.substring(idxx + 1);
if (domainnamex.indexOf(".") == -1) {
    domainnamex = hostx;
}
//alert(domainname);
/*try{
	document.domain = domainnamex;
}
catch(ex)
{
	document.domain = hostx;
	//console.log(hostx);
}*/


Date.prototype.formatStr = function (isTime) {
    var date = this;
    var month = date.getMonth() + 1;
    if (month < 10) { month = "0" + month; }
    var day = date.getDate();
    if (day < 10) { day = "0" + day; }

    var hour = date.getHours();
    if (hour < 10) { hour = "0" + hour; }
    var minu = date.getMinutes();
    if (minu < 10) { minu = "0" + minu; }
    var sec = date.getSeconds();
    if (sec < 10) { sec = "0" + sec; }
    var time = date.getFullYear() + "-" + month + "-" + day;
    if (isTime) {
        time += " " + hour + ":" + minu + ":" + sec;
    }
    //window.setInterval(handler, args, timeout)
    return time;
}
Date.prototype.dateAddSec = function (units) {
    this.setTime(this.getTime() + units * 1000);
    return this;
}
Date.prototype.dateAddMinu = function (units) {
    this.setTime(this.getTime() + units * 60000000);
    return this;
}
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "H+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

Date.prototype.dateAddHour = function (units) {
    this.setTime(this.getTime() + units * 3600000000);
    return this;
}
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}
Array.prototype.indexOf = function (value) {
    for (var i = 0, l = this.length; i < l; i++) if (this[i] == value) return i; return -1;
}
if (!window.JSON) {
    window.JSON = {
        parse: function (jsonStr) {
            return eval('(' + jsonStr + ')');
        },
        stringify: function (jsonObj) {
            var result = '',
                curVal;
            if (jsonObj === null) {
                return String(jsonObj);
            }
            switch (typeof jsonObj) {
                case 'number':
                case 'boolean':
                    return String(jsonObj);
                case 'string':
                    return '"' + jsonObj + '"';
                case 'undefined':
                case 'function':
                    return undefined;
            }

            switch (Object.prototype.toString.call(jsonObj)) {
                case '[object Array]':
                    result += '[';
                    for (var i = 0, len = jsonObj.length; i < len; i++) {
                        curVal = JSON.stringify(jsonObj[i]);
                        result += (curVal === undefined ? null : curVal) + ",";
                    }
                    if (result !== '[') {
                        result = result.slice(0, -1);
                    }
                    result += ']';
                    return result;
                case '[object Date]':
                    return '"' + (jsonObj.toJSON ? jsonObj.toJSON() : jsonObj.toString()) + '"';
                case '[object RegExp]':
                    return "{}";
                case '[object Object]':
                    result += '{';
                    for (i in jsonObj) {
                        if (jsonObj.hasOwnProperty(i)) {
                            curVal = JSON.stringify(jsonObj[i]);
                            if (curVal !== undefined) {
                                result += '"' + i + '":' + curVal + ',';
                            }
                        }
                    }
                    if (result !== '{') {
                        result = result.slice(0, -1);
                    }
                    result += '}';
                    return result;

                case '[object String]':
                    return '"' + jsonObj.toString() + '"';
                case '[object Number]':
                case '[object Boolean]':
                    return jsonObj.toString();
            }
        }
    };
}

function isMobile(tel) {
    var reg = /^0?1[3|4|5|7|8|9][0-9]\d{8}$/;
    if (reg.test(tel)) {
        return true;
    } else {
        return false;
    };
}
function isTel(tel) {
    var reg = /^0?\d{2,3}-?\d{7,8}$/;
    if (reg.test(tel)) {
        return true;
    } else {
        return false;
    };
}
function NotNull(str) {
    return (!!str);
}
function IsPhone(str) {
    return isTel(str) || isMobile(str);
}

function isNumber(val){
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)){
        return true;
    }else{
        return false;
    }
}
function num(obj){
    obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
    obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
}
//删除字符串左右空格
String.prototype.trimHTML = function () {
    return this.replace(/<[^>]*>/g, "");

};
String.prototype.IsFName = function () {
    var reg = /^[a-zA-Z][a-zA-Z\d_]*$/g;
    return reg.test(this);
};

String.prototype.Trim = function (chars) {
    var cc;
    if (!chars)
        return this.replace(/(^\s*)|(\s*$)/g, "");
    else {
        eval("cc=this.replace(/(^(" + chars + ")*)|((" + chars + ")*$)/g, '')");
        return cc;
    }
};
//删除字符串左空格
String.prototype.LTrim = function () {
    return this.replace(/(^\s*)/g, "");
};

//删除字符串右空格
String.prototype.Rtrim = function () {
    return this.replace(/(\s*$)/g, "");
};

String.prototype.toDate = function (style) {
    if (style == null) style = 'yyyy-MM-dd hh:mm:ss'
    var o = {
        'y+': 'y',
        'M+': 'M',
        'd+': 'd',
        'h+': 'h',
        'm+': 'm',
        's+': 's'
    }
    var result = {
        'y': '',
        'M': '',
        'd': '',
        'h': '00',
        'm': '00',
        's': '00',
    }
    var tmp = style
    for (var k in o)
        if (new RegExp('(' + k + ')').test(style))
            result[o[k]] = this.substring(tmp.indexOf(RegExp.$1), tmp.indexOf(RegExp.$1) + RegExp.$1.length)


    return new Date(result['y'], result['M'] - 1, result['d'], result['h'], result['m'], result['s']);
}



//url自动加上<a>标签
String.prototype.httpHtml = function () {
    var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
    return this.replace(reg, '<a href="$1$2">$1$2</a>');
};
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}

String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}

function getPosition(obj) {
    var topValue = 0, leftValue = 0;
    while (obj) {
        leftValue += obj.offsetLeft;
        topValue += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return {
        left: leftValue,
        top: topValue
    };
}
function $i(name) {
    return document.getElementById(name);
}

/*
*  显示弹出窗口
*/
function showpop(url, title, width, height, callback, data) {
    return $.dialog.pop(url, title, width, height, callback, data);
}

/*
*  关闭最上层的弹出窗口
*/
function closepop() {
    return $.dialog.pop.close.apply(this, arguments);
}

function showalert() {
    return $.dialog.pop.alert.apply(this, arguments);
}
function showtip() {
    return $.dialog.pop.tip.apply(this, arguments);
}

//向上层传递值
function setretdata(pdata) {
    return $.dialog.pop.retdata.call(this, pdata);
}

/*
*  获取最上层的弹出窗口数据
*/
function getpopdata() {
    return $.dialog.pop.getdata();
}

/*
*  显示提示窗口（会自动消失）
*/
function showtip(message, callback, interval) {
    return $.dialog.tip(message, callback, interval);
};

/*
*  显示确认窗口
*/
function showalert(title, message, callback) {
    return $.dialog.alert(title, message, callback);
};

/*
*  显示是否窗口
*/
function showconfirm(title, message, callback) {
    return $.dialog.confirm(title, message, callback);
};

/*
*  显示类似QQ弹出消息的窗口
*/
function showqq(url, title, width, height) {
    return $.dialog.qq(url, title, width, height);
}

function IsEmail(str) {
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return (reg.test(str));
}
function IsPost(str) {
    var pattern = /^[0-9]{6}$/;
    return pattern.test(str);
}
function htmlEncode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}
function ExCode(str) {
    var s = str;
    if (str.length == 0) return "";
    s = s.replace(/\'/g, "＇");
    s = s.replace(/\"/g, "＂");
    //s = s.replace(/\n/g, " ");
    return s;
}
function htmlDecode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}
function minLen(val, len, ischar) {
    len = Number(len);
    if (val) {
        if (ischar) {
            val = val.replace(/\s/g, "");
        }
        if (val.length >= len) {
            return true;
        }
    }
    return false;
}

function maxLen(val, len, ischar) {
    if (val) {
        if (ischar) {
            val = val.replace(/\s/g, "");
        }
        if (val.length <= len) {
            return true;
        }
    }
    return false;
}

function rangeLen(val, min, max, ischar) {
    if (val) {
        if (ischar) {
            val = val.replace(/\s/g, "");
        }
        if (val.length >= min && val.length <= max) {
            return true;
        }
    }
    return false;
}
function isNumber(val, isnvl) {
    if (val == "" && isnvl) { return true; }
    var dd = Number(val);
    if (isNaN(dd)) { return false; }
    return true;
}
function digiRange(val, min, max) {
    var dd = Number(val);
    if (isNaN(dd)) { return false; }
    if (min) {
        if (val < min) {
            return false;
        }
    }
    if (max) {
        if (val > max) {
            return false;
        }
    }
    return true;
}
var browser = {
    init: function () {
        this.name = this.searchString(this.dataBrowser) || '';
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || '';
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: 'MSIE',
            identity: 'explorer',
            versionSearch: 'MSIE'
        }
    ]
};
browser.init();
function CheckDataValid(obj) {
    var cu = obj.getAttribute("checktype");
    var alertMessage = obj.getAttribute("alertmessage");
    if (!cu) return true;
    var arrCT = cu.split('#');
    for (var k = 0; k < arrCT.length; k++) {
        var ct = arrCT[k];
        if (!ct) { continue; }

        var cts = ct.split(',')
        var val = ExCode(obj.value);
        //if (browser.name == 'explorer') {
        val = val.replace(/\n/ig, "  ");
        val = val.replace(/\r/ig, "  ");
        val = val.replace(/\(/ig, "（")
        val = val.replace(/\)/ig, "）")
        // }
        var ddx;
        if (cts.length == 1) {
            ddx = cts[0] + "('" + val + "')";
        }
        else {
            var params = "";
            for (var i = 1; i < cts.length; i++) {
                params += ",'" + cts[i] + "'";
            }
            ddx = cts[0] + "('" + val + "'" + params + ")";
        }

        var result = window.eval("(" + ddx + ")");
        if (!result) {
            break;
        }

    }
    if (!result) {
        if (!alertMessage) { alertMessage = "验证不通过!"; }
        alert(alertMessage);
        obj.focus();
    }
    return result;
}

function IdentityCodeValid(ID) {
    if (typeof ID !== 'string') return '非法字符串';
    var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    var birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2));
    var d = new Date(birthday);
    var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
    var currentTime = new Date().getTime();
    var time = d.getTime();
    var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    var sum = 0, i, residue;

    if (!/^\d{17}(\d|x)$/i.test(ID)) return '非法身份证';
    if (city[ID.substr(0, 2)] === undefined) return "非法地区";
    if (time >= currentTime || birthday !== newBirthday) return '非法生日';
    for (i = 0; i < 17; i++) {
        sum += ID.substr(i, 1) * arrInt[i];
    }
    residue = arrCh[sum % 11];
    if (residue !== ID.substr(17, 1)) return '非法身份证哦';

    return "";
}
function JsonToString(o) {
    var arr = [];
    var fmt = function (s) {
        if (typeof s == 'object' && s != null) return JsonToString(s);
        return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
    }
    for (var i in o)
        arr.push("'" + i + "':" + fmt(o[i]));
    return '{' + arr.join(',') + '}';
}
function strToObj(json) {
    json = json.replace(/\n/ig, " ");
    json = json.replace(/\r/ig, " ");
    return eval("(" + json + ")");
}
function onlyNum(evt) {
    evt = evt || window.event;
    if (!(evt.keyCode == 46) && !(evt.keyCode == 8) && evt.keyCode != 9 && !(evt.keyCode == 37) && !(evt.keyCode == 39))
        if (!((evt.keyCode >= 48 && evt.keyCode <= 57) || (evt.keyCode >= 96 && evt.keyCode <= 105))) {
            if (window.event)
                evt.returnValue = false;
            else
                evt.preventDefault();//for firefox
        }
}


function HashTable() {
    var size = 0;
    var entry = new Object();
    this.Entry = entry;
    this.add = function (key, value) {
        if (!this.containsKey(key)) {
            size++;
        }
        entry[key] = value;
    }

    this.getValue = function (key) {
        return this.containsKey(key) ? entry[key] : null;
    }

    this.remove = function (key) {
        if (this.containsKey(key) && (delete entry[key])) {
            size--;
        }
    }

    this.containsKey = function (key) {
        return (key in entry);
    }

    this.containsValue = function (value) {
        for (var prop in entry) {
            if (entry[prop] == value) {
                return true;
            }
        }
        return false;
    }

    this.getValues = function () {
        var values = new Array();
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    }

    this.joinKeys = function (separator) {
        if (!separator) separator = ",";
        var keys = this.getKeys();
        var val = keys.join(separator);
        return val;
    }

    this.getKeys = function () {
        var keys = new Array();
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    }

    this.getSize = function () {
        return size;
    }

    this.clear = function () {
        size = 0;
        entry = new Object();
    }
}
String.prototype.replaceAll = function (replaceStr, key) {
    return this.split(replaceStr).join(key);
}
if (typeof jQuery == 'function') {
    (function ($) {
        $.fn.serializeObject = function () {
            var serializeObj = {};
            var array = this.serializeArray();
            //var str = this.serialize();
            $(array).each(function () {
                if (serializeObj[this.name]) {
                    if ($.isArray(serializeObj[this.name])) {
                        serializeObj[this.name].push(this.value);
                    } else {
                        serializeObj[this.name] = [serializeObj[this.name], this.value];
                    }
                } else {
                    serializeObj[this.name] = this.value;
                }
            });
            return serializeObj;
        };
        jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {
            this.each(function () {
                var jqNode = $(this);
                jqNode.css({ position: 'relative' });
                for (var x = 1; x <= intShakes; x++) {
                    jqNode.animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
                    .animate({ left: intDistance }, ((intDuration / intShakes) / 2))
                    .animate({ left: 0 }, (((intDuration / intShakes) / 4)));
                }
            });
            return this;
        };
        jQuery.fn.shakeTip = function (msg, width, intShakes, intDistance, intDuration) {
            var st = $("#shakeTip");
            var jqNode = $(this);
            var mwid = jqNode.width();
            var mhei = jqNode.height();
            var mtop = jqNode.offset().top;
            var mleft = jqNode.offset().left;
            var ntop = mtop + mhei / 2;
            var nleft = mleft + mwid / 2;
            if (!intShakes || intShakes < 2) {
                intShakes = 2;
            }
            if (!intDistance || intDistance < 10) {
                intDistance = 10;
            }
            if (!intDuration || intDuration < 1500) {
                intDuration = 1500;
            }
            var foTime = intDuration + 3500;
            if (st.length > 0) {
                st.remove();
            }
            st = $("<div id='shakeTip' style='position:absolute;z-index:1050;background-color:#CCC;text-align:center;left:" + nleft + "px;top:" + ntop + "px;width:" + width + "px;'><div id='shakeTipMsg' style='border:solid 1px #066;'>" + msg + "</div></div>");
            $(document.body).append(st);
            st.show();
            $("#shakeTipMsg").shake(intShakes, intDistance, intDuration);
            st.fadeOut(foTime);
            return this;
        };
    })(jQuery);
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

var isUpdate;
var btnobj;
var btnisReturn = false;
function SaveData(opt) {
    btnobj = opt.obj;
    if (btnobj) btnobj.disabled = true;
    var process_data = opt.processData;
    if (!process_data) process_data = false;
    isUpdate = false;
    var sfun = opt.success;
    if (typeof sfun != "function") { sfun = GetSuccess; }
    var method = opt.method;
    if (!method) { method = "post"; }
    var dataType = opt.dataType;
    if (!dataType) { dataType = "json"; }
    var errfun = opt.error;
    if (!errfun) { errfun = GetError; }
    btnisReturn = opt.isReturn;
    contentType = opt.contentType;
    if ("undefined" == typeof contentType) { contentType = "application/x-www-form-urlencoded"; }
    else if (contentType == "json") {
        contentType = "application/json;charset=utf-8";
    }
    var formid = opt.formId;
    var pdata = opt.param;
    if (!pdata && formid) {
        pdata = JSON.stringify($("#" + formid).serializeObject());
    }

    $.ajax({
        processData: process_data,
        type: method,
        url: opt.url,
        data: pdata,
        dataType: dataType,
        contentType: contentType,
        success: sfun,
        error: errfun
    });
}
function GetSuccess(data) {
    if (data.statusCode == 200) {
        isUpdate = true;
        if (btnobj) btnobj.disabled = false;
        alert(data.message);
        if (btnisReturn) ReturnDoc(data);
    }
    else {
        alert(data.message);
    }
}
function GetError(ex) {
    alert(ex);
}
function ReturnDoc(data) {
    closepop('ok', { OK: isUpdate, Data: data });
}

function getFromData(id) {
    var dataMap = new Map();
    $("#" + id + " input,select").each(function () {
        var value = $(this).val();      //input 值
        var name = $(this).attr('name');
        dataMap.set(name, value);
    });
    //Map转为Json的方法
    let obj = Object.create(null);
    for (var key in map) {
        obj[key] = map[key];
        //console.log("map["+key+"]"+map[key]);  
    }
    return obj;
}

function Base64() {

    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding  
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }

    // public method for decoding  
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function previewImg(obj) {
    if (!layer) {
        console.log("缺少layerUI组件");
        return false;
    }
    var img = new Image();
    img.src = obj.src;
    var height = img.height; //获取图片高度
    var width = img.width; //获取图片宽度
    var imgHtml = "<img src='" + obj.src + "' {style} />";
    var iheight = height;
    var iwidth = width;
    if (iheight > 600) {
        iheight = 600;
    }
    iwidth = width / height * iheight;
    if (iwidth > 800) {
        iwidth = 800;
    }
    iheight = height / width * iwidth;
    imgHtml = imgHtml.replaceAll("{style}", "style='width:" + iwidth + "px;height:" + iheight + "px;'");
    //弹出层
    layer.open({
        type: 1,
        shade: 0.8,
        offset: 'auto',
        area: [iwidth + 'px', (iheight + 50) + 'px'],
        shadeClose: true,//点击外围关闭弹窗
        scrollbar: false,//不现实滚动条
        title: "图片预览", //不显示标题  
        content: imgHtml, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响  
        cancel: function () {
            //layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', { time: 5000, icon: 6 });  
        }
    });
}
function menuLoad(menulist, isfirst) {
    var href = "";
    var dataresult = "";
    for (var ii = 0; ii < menulist.length; ii++) {
        var itemii = "<li class='{1}'>{0}</li>";
        var item = menulist[ii];
        var temp = "";
        var nodeclass="nodeitem";
        if (item.data.url) {
            href = item.data.url.startWith("/") ? item.data.url.substring(1) : item.data.url;
            if (!href.startWith("http")) {
                if (_ctx) {
                    href = _ctx + href;
                }
            }
            temp += '<a onclick="xadmin.add_tab(\'' + item.data.name + '\',\'' + href + '\')">';
            if (item.data.iconcode) {
            	temp +="<i class='icon iconfont'>" + item.data.iconcode + "</i>";
                temp += "<input type='text' name='iconcode' value='" + item.data.iconcode + "' style='display:none;'>";
            }
            else {
                if (isfirst) {
                    temp += '<i class="iconfont">&#xe723;</i>';
                }
                else {
                    temp += '<i class="iconfont">&#xe6a7;</i>';
                }
            }
            temp += "<cite>" + item.data.name + "</cite>";
            if (item.childNodes && item.childNodes.length > 0) {
                temp += '<i class="iconfont nav_right">&#xe697;</i>';
            }
            temp += "</a>";
        }
        else {
        	nodeclass="folderitem";
            temp += '<a href="javascript:;">';
            if (item.data.iconcode) {
            	temp +="<i class='icon iconfont'>" + item.data.iconcode + "</i>";
                temp += "<input type='text' name='iconcode' value='" + item.data.iconcode + "' style='display:none;'>";
            }
            else {
                if (isfirst) {
                    temp += '<i class="iconfont">&#xe723;</i>';
                }
                else {
                    temp += '<i class="iconfont">&#xe6a7;</i>';
                }
            }
            temp += "<cite>" + item.data.name + "</cite>";
            if (item.childNodes) {
                temp += '<i class="iconfont nav_right">&#xe697;</i>';
            }
            temp += "</a>";
        }
        if (item.childNodes && item.childNodes.length > 0) {
            temp += '<ul class="sub-menu">';
            var subitem = menuLoad(item.childNodes, false);
            temp += subitem;
            temp += '</ul>';
        }
        dataresult += itemii.format(temp,nodeclass);
    }
    //console.log(dataresult);
    return dataresult;
}
$.fn.initForm = function(jsonValue) {   
    var obj=this;
    if($.type(jsonValue) === "string"){  
        jsonValue = $.parseJSON(jsonValue);  
    }  
    $.each(jsonValue, function (name, ival) {
    	var $oinput = obj.find("input[name=" + name + "]"); 
    	if ($oinput.attr("type")== "radio" || $oinput.attr("type")== "checkbox"){
    		 $oinput.each(function(){
                 if(Object.prototype.toString.apply(ival) == '[object Array]'){//是复选框，并且是数组
                      for(var i=0;i<ival.length;i++){
                          if($(this).val()==ival[i])
                             $(this).attr("checked", "checked");
                      }
    	 		 }else{
                     if($(this).val()==ival)
                        $(this).attr("checked", "checked");
                 }
             });
    	}else if($oinput.attr("type")== "textarea"){//多行文本框
    		obj.find("[name="+name+"]").html(ival);
    	}else{
             obj.find("[name="+name+"]").val(ival); 
        }
   });
};

