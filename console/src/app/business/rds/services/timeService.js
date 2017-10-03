define(["jquery"], function($) {
    "use strict";
    var service = function() {
            this.UTC2Local = function(utcLong) {
                var date = new Date
                    , offset = 60 * date.getTimezoneOffset() * 1e3;
                return parseInt(utcLong, 10) - offset
            }
            ;
            this.local2UTC = function(localLong) {
                var date = new Date
                    , offset = 60 * date.getTimezoneOffset() * 1e3;
                return parseInt(localLong, 10) + offset
            }
            ;
            this.dateStr2Milliseconds = function(dateStr) {
                var year, month, day, hour, mins, ss, sDate;
                if (!dateStr || 19 !== dateStr.length)
                    return 0;
                year = dateStr.substr(0, 4);
                month = dateStr.substr(5, 2);
                day = dateStr.substr(8, 2);
                hour = dateStr.substr(11, 2);
                mins = dateStr.substr(14, 2);
                ss = dateStr.substr(17, 2);
                sDate = new Date(+year,month - 1,+day,+hour,+mins,+ss);
                return sDate.getTime()
            }
            ;
            this.utcTime2Milliseconds = function(utcTime) {
                var offset = 60 * -(new Date).getTimezoneOffset() * 1e3
                    , milliseconds = this.dateStr2Milliseconds(utcTime) + offset;
                return milliseconds
            }
            ;
            this.dateStr2DateTimeObj = function(dataString) {
                var tDate, str = "";
                str = "string" == typeof dataString ? dataString.toString() : dataString.toString();
                str = str.replace(/-/g, "/");
                tDate = new Date(str);
                return tDate
            }
            ;
            this.dateObj2Milliseconds = function(date) {
                return date.getMilliseconds()
            }
            ;
            this.milliseconds2DateStr = function(datel) {
                var curDate = new Date(datel)
                    , dateStr = curDate.getFullYear() + "-";
                dateStr = curDate.getMonth() + 1 < 10 ? dateStr + "0" + (curDate.getMonth() + 1) + "-" : dateStr + (curDate.getMonth() + 1) + "-";
                dateStr = curDate.getDate() < 10 ? dateStr + "0" + curDate.getDate() + " " : dateStr + curDate.getDate() + " ";
                dateStr = curDate.getHours() < 10 ? dateStr + "0" + curDate.getHours() + ":" : dateStr + curDate.getHours() + ":";
                dateStr = curDate.getMinutes() < 10 ? dateStr + "0" + curDate.getMinutes() + ":" : dateStr + curDate.getMinutes() + ":";
                curDate.getSeconds() < 10 ? dateStr = dateStr + "0" + curDate.getSeconds() : dateStr += curDate.getSeconds();
                return dateStr
            }
            ;
            this.htmlEncode = function(value) {
                if (value)
                    return $("<div />").text(value).html();
                return value
            }
            ;
            this.htmlDecode = function(value) {
                if (value)
                    return $("<div />").html(value).text();
                return value
            }
            ;
            this.utc2Local = function(utcDateStr) {
                var utcTime, localTime;
                if (!utcDateStr || "" === utcDateStr)
                    return "";
                utcTime = this.dateStr2Milliseconds(utcDateStr);
                localTime = this.UTC2Local(utcTime);
                return this.milliseconds2DateStr(localTime)
            }
            ;
            this.local2Utc = function(localDateStr) {
                var localTime, utcTime;
                if (!localDateStr || "" === localDateStr)
                    return "";
                localTime = this.dateStr2Milliseconds(localDateStr);
                utcTime = this.local2UTC(localTime);
                return this.milliseconds2DateStr(utcTime)
            }
            ;
            this.seconds2DateStr = function(secondsStr) {
                if (!secondsStr || "" === secondsStr)
                    return "";
                return this.milliseconds2DateStr(secondsStr)
            }
            ;
            this.dateTimeToISODate = function(dateStr) {
                var indexOfBlank = dateStr.indexOf(" ");
                return dateStr.substring(0, indexOfBlank) + "T" + dateStr.substring(indexOfBlank + 1) + "Z"
            }
            ;
            this.ISODateToDate = function(ISOStr) {
                var indexOfT = ISOStr.indexOf("T")
                    , indexOfZ = ISOStr.indexOf("Z");
                return ISOStr.substring(0, indexOfT) + " " + ISOStr.substring(indexOfT + 1, indexOfZ)
            }
            ;
            this.TimeToDateAndTime = function(time) {
                var curDate = new Date
                    , year = curDate.getFullYear()
                    , month = curDate.getMonth() + 1
                    , day = curDate.getDate()
                    , clock = year + "-";
                month < 10 && (clock += "0");
                clock += month + "-";
                day < 10 && (clock += "0");
                clock += day + " " + time;
                return clock
            }
            ;
            this.clientTimeZone = function() {
                var munites = (new Date).getTimezoneOffset()
                    , hour = parseInt(munites / 60, 10)
                    , munite = munites % 60
                    , prefix = "-";
                if (hour < 0 || munite < 0) {
                    prefix = "+";
                    hour = -hour;
                    munite < 0 && (munite = -munite)
                }
                hour += "";
                munite += "";
                1 === hour.length && (hour = "0" + hour);
                1 === munite.length && (munite = "0" + munite);
                return "GMT" + prefix + hour + ":" + munite
            }
            ;
            this.DateAndTimeToTime = function(dateStr) {
                var indexOfBlank = dateStr.indexOf(" ");
                return dateStr.substring(indexOfBlank + 1)
            }
            ;
            this.formatDate = function(date) {
                var myyear = date.getFullYear()
                    , mymonth = date.getMonth() + 1
                    , myweekday = date.getDate()
                    , myhour = date.getHours()
                    , myminutes = date.getMinutes();
                mymonth < 10 && (mymonth = "0" + mymonth);
                myweekday < 10 && (myweekday = "0" + myweekday);
                myhour < 10 && (myhour = "0" + myhour);
                myminutes < 10 && (myminutes = "0" + myminutes);
                return myyear + "-" + mymonth + "-" + myweekday + " " + myhour + ":" + myminutes
            }
            ;
            this.formatDate1 = function(date) {
                var myyear = date.getFullYear()
                    , mymonth = date.getMonth() + 1
                    , myweekday = date.getDate()
                    , myhour = date.getHours()
                    , myminutes = date.getMinutes()
                    , myseconds = date.getSeconds();
                mymonth < 10 && (mymonth = "0" + mymonth);
                myweekday < 10 && (myweekday = "0" + myweekday);
                myhour < 10 && (myhour = "0" + myhour);
                myminutes < 10 && (myminutes = "0" + myminutes);
                myseconds < 10 && (myseconds = "0" + myseconds);
                return myyear + "-" + mymonth + "-" + myweekday + " " + myhour + ":" + myminutes + ":" + myseconds
            }
        }
        , rdsModule = angular.module("rds.config");
    rdsModule.tinyService("timeFormat", service);
    return rdsModule
});
