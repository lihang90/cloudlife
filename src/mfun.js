// JavaScript Document

//判断浏览器类型
function browserType(){
  var userAgent=navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('android')>-1&& userAgent.indexOf('linux')>-1){
    return 'android';
  }else if(userAgent.indexOf('iphone')>-1){
    return 'iphone';
  }else{
    return false;
  }
}

//生成随机数
function getRandom(min,max){
  return Math.round(Math.random()*(max-min)+min);
}

//获取URL参数
function getUrlValue(name)
{
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	if(window.location.search.substr(1).match(reg))
	{
		var arr=window.location.search.substr(1).match(reg);
		return decodeURIComponent(arr[2]);	
	}
}
//是否微信
function isWeiXin(){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		return true;
	}else{
		return false;
	}
}
//是否微博
function isWeiBo(){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/weibo/i) == 'weibo'){
		return true;
	}else{
		return false;
	}
}
//阻止事件冒泡
function stopPropagation(e) {  
    e = e || window.event;  
    if(e.stopPropagation) { //W3C阻止冒泡方法  
        e.stopPropagation();  
    } else {  
        e.cancelBubble = true; //IE阻止冒泡方法  
    }  
}


//生成随机颜色
function getRandomColor(){   
  return  '#' +   
    (function(color){   
    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])   
      && (color.length == 6) ?  color : arguments.callee(color);   
  })('');   
}

//上传图片立即显示
function uploadAndShow(input,img){
    $(input).change(function(){
        console.log('chang');
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(img).attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });
}

/****COOKIE方法*************************************************************************/
//设置cookies
function setCookie(name,value){//写cookies
    var Days = 1000;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
}
//读取cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
/****时间类方法*************************************************************************/
//判断是否是润年
function is_leap_year (year) {
    return year % ((year % 100) ? 4 : 400) ? false : true;
}

//返回两个日期相差天数
function getDifferDay(strDateStart,strDateEnd){
    var strSeparator = "-"; //日期分隔符
    var oDate1;
    var oDate2;
    var iDays;
    oDate1= strDateStart.split(strSeparator);
    oDate2= strDateEnd.split(strSeparator);
    var strDateS = new Date(oDate1[0],oDate1[1],oDate1[2]);
    var strDateE = new Date(oDate2[0],oDate2[1],oDate2[2]);
    iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数
    return iDays ;
}

//获得与当前日期相差指定天数的日期
function getDifferDate(day){
    var d=new Date();
    d.setTime(d.getTime() - 1000* 60 * 60 * 24*day);
    return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
}

//获得11位数字时间 Unix时间戳
function getUnixTimestamp(){
    return Math.round(new Date().getTime()/1000);
}

//Unix时间戳转换为普通时间
function getNomarlTime(timestamp){
    var unixTimestamp = new Date(timestamp * 1000);
    return unixTimestamp.toLocaleString();
}

//uuid生成方法
(function() {
    // Private array of chars to use
    var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

    Math.uuid = function (len, radix) {
        var chars = CHARS, uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random()*16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    };

    // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
    // by minimizing calls to random()
    Math.uuidFast = function() {
        var chars = CHARS, uuid = new Array(36), rnd=0, r;
        for (var i = 0; i < 36; i++) {
            if (i==8 || i==13 ||  i==18 || i==23) {
                uuid[i] = '-';
            } else if (i==14) {
                uuid[i] = '4';
            } else {
                if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };

    // A more compact, but less performant, RFC4122v4 solution:
    Math.uuidCompact = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };
})();