(function() {
        "use strict";
        function getBrowserInfo() {
            var Msie = /(msie\s|trident.*rv:)([\w.]+)/
                , Firefox = /(firefox)\/([\w.]+)/
                , Chrome = /(chrome)\/([\w.]+)/
                , Opera = /(opera).+version\/([\w.]+)/
                , Safari = /version\/([\w.]+).*(safari)/
                , agent = navigator.userAgent.toLowerCase()
                , match = Msie.exec(agent);
            if (match)
                return {
                    "browser": "IE",
                    "version": match[2] || "0"
                };
            match = Firefox.exec(agent);
            if (match)
                return {
                    "browser": match[1] || "",
                    "version": match[2] || "0"
                };
            match = Chrome.exec(agent);
            if (match)
                return {
                    "browser": match[1] || "",
                    "version": match[2] || "0"
                };
            match = Opera.exec(agent);
            if (match)
                return {
                    "browser": match[1] || "",
                    "version": match[2] || "0"
                };
            match = Safari.exec(agent);
            if (match)
                return {
                    "browser": match[2] || "",
                    "version": match[1] || "0"
                };
            return "false"
        }
        function detectOS() {
            var isUnix, UserAgent, isIpad, isIphone, isAndroid, isWindowsCe, isWindowsMobile, isWin2K, isWin7, isWin8, isWin81, isLinux, bIsAndroid, isWinXP, isWin2003, isWinVista, isWin10, sUserAgent = navigator.userAgent, isWin = "Win32" === navigator.platform || "Win64" === navigator.platform || "Windows" === navigator.platform, isMac = "Mac68K" === navigator.platform || "MacPPC" === navigator.platform || "Macintosh" === navigator.platform || "MacIntel" === navigator.platform;
            if (isMac)
                return "Mac";
            isUnix = "X11" === navigator.platform && !isWin && !isMac;
            if (isUnix)
                return "linux";
            UserAgent = sUserAgent.toLowerCase();
            isIpad = /ipad/.test(UserAgent);
            isIphone = /iphone os/.test(UserAgent);
            isAndroid = /android/.test(UserAgent);
            isWindowsCe = /windows ce/.test(UserAgent);
            isWindowsMobile = /windows mobile/.test(UserAgent);
            isWin2K = /windows nt 5.0/.test(UserAgent);
            /windows nt 5.1/.test(UserAgent);
            /windows nt 6.0/.test(UserAgent);
            isWin7 = /windows nt 6.1/.test(UserAgent);
            isWin8 = /windows nt 6.2/.test(UserAgent);
            isWin81 = /windows nt 6.3/.test(UserAgent);
            if (isIpad || isIphone || isAndroid || isWindowsMobile || isWindowsCe)
                return "other";
            isLinux = String(navigator.platform).indexOf("Linux") > -1;
            bIsAndroid = "android" === sUserAgent.toLowerCase().match(/android/i);
            if (isLinux)
                return bIsAndroid ? "other" : "linux";
            if (isWin) {
                isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
                if (isWin2K)
                    return "win7";
                isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
                if (isWinXP)
                    return "win7";
                isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
                if (isWin2003)
                    return "win7";
                isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
                if (isWinVista)
                    return "win7";
                isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
                if (isWin7)
                    return "win7";
                isWin10 = sUserAgent.indexOf("Windows NT 6.2") > -1 || sUserAgent.indexOf("Windows NT 6.3") > -1 || sUserAgent.indexOf("Windows NT 6.4") > -1 || sUserAgent.indexOf("Windows NT 10.0") > -1 || sUserAgent.indexOf("Windows 10") > -1;
                if (isWin10)
                    return "win10";
                if (isWin8 || isWin81)
                    return "win7"
            }
            return "false"
        }
        function checkBrowser() {
            var browserInfo, browser, version, browserArray, supportArray, index, currentOs = detectOS(), browserFlag = "C", flag = browserFlag;
            if ("false" === currentOs)
                return flag;
            if ("other" === currentOs)
                return "A";
            browserInfo = getBrowserInfo();
            if ("false" === browserInfo)
                return flag;
            browser = browserInfo.browser.toLowerCase();
            version = browserInfo.version;
            browserArray = supportOSArray[currentOs];
            supportArray = browserArray[browser];
            for (index in supportArray) {
                flag = supportArray[index];
                if (index.indexOf("X") >= 0)
                    return flag;
                if (index.indexOf("+") >= 0 && parseInt(version, 10) >= parseInt(index, 10))
                    return flag;
                if (parseInt(version, 10) === parseInt(index, 10))
                    return flag
            }
            return browserFlag
        }
        function setCookie(cname, cvalue) {
            document.cookie = cname + "=" + cvalue + ";path=/"
        }
        var supportOSArray = {
                "win7": {
                    "ie": {
                        "9+": "A"
                    },
                    "firefox": {
                        "38+": "A",
                        "27+": "B"
                    },
                    "chrome": {
                        "43+": "A",
                        "31+": "B"
                    }
                },
                "win10": {
                    "microsoft edge": {
                        "13+": "B"
                    },
                    "ie": {
                        "9+": "A"
                    },
                    "firefox": {
                        "38+": "A",
                        "27+": "B"
                    },
                    "chrome": {
                        "43+": "A",
                        "31+": "B"
                    }
                },
                "linux": {
                    "firefox": {
                        "27+": "A",
                        "X": "B"
                    },
                    "chrome": {
                        "50+": "A",
                        "31+": "B"
                    }
                },
                "mac": {
                    "chrome": {
                        "43+": "A",
                        "31+": "B"
                    },
                    "safari": {
                        "8+": "B"
                    }
                }
            }
            , minimumBrowserVersion = {
                "ie": "9+",
                "firefox": "27+",
                "chrome": "31+"
            }
            , result = checkBrowser();
        if ("C" === result) {
            setCookie("minimumBrowserVersion", JSON.stringify(minimumBrowserVersion));
            window.location.href = "/error/supportBrowsers.html"
        } else
            "B" === result ? setCookie("browserCheckResult", "B") : setCookie("browserCheckResult", "A")
    }
)();
