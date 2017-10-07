(function() {
        "use strict";
        function getUrlParameter(paramKey) {
            var sURLVariables, i, sParameterName, sPageURL = window.location.search.substring(1);
            if (sPageURL) {
                sURLVariables = sPageURL.split("&");
                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split("=");
                    if (sParameterName[0] === paramKey)
                        return sParameterName[1]
                }
            }
        }
        function getLanguage(key) {
            var result = getUrlParameter(key);
            window.urlParams || (window.urlParams = {});
            result || (result = getCookie(key));
            if (supportLanguage.indexOf(result) >= 0)
                window.urlParams.lang = result;
            else {
                result = (navigator.browserLanguage || navigator.language).toLowerCase();
                result = languageTranslate(result);
                if (supportLanguage.indexOf(result) >= 0)
                    window.urlParams.lang = result;
                else {
                    result = supportLanguage[0];
                    window.urlParams.lang = result
                }
            }
            setCookie(key, result)
        }
        function languageTranslate(browserCode) {
            if (browserCode)
                return browserCodeMap[browserCode.substr(0, 2)]
        }
        function trimEmpty(value) {
            if (!value)
                return "";
            return value.replace(/(^\s*)|(\s*$)/g, "")
        }
        function getCookie(key) {
            var consoleCookies, cookie, i;
            if (!document.cookie)
                return null;
            consoleCookies = document.cookie.split(";");
            for (i = 0; i < consoleCookies.length; i++) {
                cookie = consoleCookies[i].split("=");
                if (cookie && cookie.length >= 2 && key === trimEmpty(cookie[0]))
                    return trimEmpty(cookie[1])
            }
        }
        function setCookie(cname, cvalue) {
            document.cookie = cname + "=" + cvalue + ";path=/;domain=" + window.cloudCookieDomain
        }
        var supportLanguage, browserCodeMap;
        (function() {
                var hrefs, locationHref = window.location.href;
                if (!window.location.hash) {
                    -1 !== locationHref.indexOf("?hws_route_url=") ? locationHref = locationHref.replace("?hws_route_url=", "#/") : -1 !== locationHref.indexOf("&hws_route_url=") && (locationHref = locationHref.replace("&hws_route_url=", "#/"));
                    hrefs = locationHref.split("#/");
                    if (2 === hrefs.length) {
                        -1 !== hrefs[1].indexOf("&") && (hrefs[1] = hrefs[1].replace("&", "?"));
                        window.location.href = hrefs[0] + "#/" + hrefs[1]
                    }
                }
            }
        )(window);
        supportLanguage = ["zh-cn", "en-us"];
        browserCodeMap = {
            "zh": "zh-cn",
            "en": "en-us",
            "de": "de-de",
            "es": "es-es",
            "pt": "pt-br"
        };
        getLanguage("locale")
    }
)();
