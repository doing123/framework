define(function() {
    "use strict";
    var storage, cookieStorage = {
        "cache": [],
        "setItem": function(key, value, ttl) {
            var date, cookieString = key + "=" + encodeURIComponent(value);
            if (ttl > 0) {
                date = new Date;
                date.setTime(date.getTime + ttl);
                cookieString = cookieString + "; expire=" + date.toGMTString()
            }
            this.cache.push(key);
            document.cookie = cookieString
        },
        "getItem": function(key) {
            var cookies = document.cookie.split("; ")
                , arr = null
                , i = 0;
            for (; i < cookies.length; ) {
                arr = cookies[i++].split("=");
                if (arr[0] === key)
                    return decodeURIComponent(arr[1])
            }
            return ""
        },
        "removeItem": function(key) {
            var date = new Date;
            date.setTime(date.getTime() - 1e4);
            document.cookie = key + "=v; expire=" + date.toGMTString()
        },
        "clear": function() {
            var cache = this.cache
                , i = 0;
            for (; i < cache.length; )
                this.removeItem(cache[i++])
        }
    };
    window.cookieStorage = window.cookieStorage || cookieStorage;
    storage = function() {
        var storage = window.cookieStorage;
        "undefined" != typeof Storage && (storage = window.sessionStorage);
        this.storage = storage;
        this.cookieStorage = cookieStorage
    }
    ;
    storage.prototype.add = function(key, value, ttl) {
        var storage = this.storage;
        "object" == typeof value && (value = JSON.stringify(value));
        storage.setItem(key, value, ttl)
    }
    ;
    storage.prototype.get = function(key) {
        var storage = this.storage
            , value = storage.getItem(key);
        try {
            return JSON.parse(value)
        } catch (e) {
            return value
        }
    }
    ;
    storage.prototype.del = function(key) {
        this.storage.removeItem(key)
    }
    ;
    storage.prototype.flush = function() {
        this.storage.clear()
    }
    ;
    return storage
});
