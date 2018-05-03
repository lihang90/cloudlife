/*
* 与时间相关的方法
* */

var Time = {
    formatTime : function(time, format){
        //格式化时间
        var d = new Date();
        d.setTime(time);
        var o = {
            "M+" : d.getMonth()+1,                 //月份
            "D+" : d.getDate(),                    //日
            "H+" : d.getHours(),                   //小时
            "m+" : d.getMinutes(),                 //分
            "s+" : d.getSeconds(),                 //秒
            "q+" : Math.floor((d.getMonth()+3)/3), //季度
            "S"  : d.getMilliseconds()             //毫秒
        };
        if(/(Y+)/.test(format)) {
            format=format.replace(RegExp.$1, (d.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(format)){
                format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return format;
    },
    unix2utc : function(timestamp){
        //Unix时间戳转换为普通时间
        var unixTimestamp = new Date(timestamp * 1000);
        return unixTimestamp.toLocaleString();
    },
    unixTimestamp : function(){
        //获取Unix时间戳,从1970至今的毫秒数
        return Math.round(new Date().getTime()/1000);
    },
    getDifferDay : function(strDateStart,strDateEnd){
        //两个日期相差天数
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
    },
    isLeapYear :function(year){
        //是否为润年
        return year % ((year % 100) ? 4 : 400) ? false : true;
    },
    formatLastTime : function(value){
        //格式化时间为过去的中文提示
        var value = new Date(value);
        var TIME_MIN = 60 * 1000;
        var TIME_HOUR = 60 * 60 * 1000;
        var TIME_DAY = 24 * 60 * 60 * 1000;
        var now=new Date();
        var diff=parseInt(now.getTime()-value.getTime());  //时间差的毫秒数
        if (diff < TIME_MIN) {
            return "刚刚";
        } else if (diff >= TIME_MIN && diff < TIME_HOUR) {
            return parseInt(diff / TIME_MIN) + "分钟前";
        } else if (diff >= TIME_HOUR && diff < TIME_DAY) {
            return parseInt(diff / TIME_HOUR) + "小时前";
        } else if (diff >= TIME_DAY && diff < TIME_DAY * 3) {//3天
            return parseInt(diff / TIME_DAY) + "天前";
        } else {
            return this.formatTime(value,'YYYY-MM-DD');
        }
    },
};
// const result = Time.formatTime(new Date().getTime(),'YYYY-MM-DD HH:mm:ss');
// console.log(result);


module.exports = Time;

