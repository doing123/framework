define([], function () {
    "use strict";
    var MAX_MSG_NUMBER = 3
        , msgID = 1;
    return ["$timeout", "$rootScope", "storage", function ($timeout, rootScope, storage) {
        rootScope.ctiMsgManager || (rootScope.ctiMsgManager = []);
        this.alert = function (type, message, duration, noTypeIcon, noCloseIcon) {
            var msgObj, i, curLen = rootScope.ctiMsgManager.length;
            curLen >= MAX_MSG_NUMBER && rootScope.ctiMsgManager.splice(0, curLen - MAX_MSG_NUMBER + 1);
            duration || (duration = "error" === type ? 1e4 : 5e3);
            msgObj = {
                "id": "msg_" + msgID++,
                "show": !0,
                "label": message,
                "type": type,
                "typeIcon": !noTypeIcon,
                "closeIcon": !noCloseIcon,
                "duration": duration
            };
            if (rootScope.ctiMsgManager.length > 0)
                for (i = 0; i < rootScope.ctiMsgManager.length; i++)
                    message === rootScope.ctiMsgManager[i].label && (rootScope.ctiMsgManager[i].show = !1);
            message && this.storageMsg(type, message);
            rootScope.ctiMsgManager.push(msgObj)
        }
        ;
        this.showError = function (message, duration) {
            this.alert("error", message, duration)
        }
        ;
        this.showSuccess = function (message, duration) {
            this.alert("success", message, duration)
        }
        ;
        this.showPrompt = function (message, duration) {
            this.alert("prompt", message, duration)
        }
        ;
        this.showWarn = function (message, duration) {
            this.alert("warn", message, duration)
        }
        ;
        this.storageMsg = function (type, msg) {
            var agencyID, tipsMessages, msgData = {};
            msgData.content = "[" + type + "] " + msg;
            msgData.time = new Date;
            agencyID = storage.cookieStorage.getItem("agencyID");
            tipsMessages = storage.get("framework_tips_msg" + agencyID);
            tipsMessages = tipsMessages || [];
            tipsMessages.unshift(msgData) > 50 && tipsMessages.pop();
            storage.add("framework_tips_msg" + agencyID, tipsMessages);
            storage.add("framework_tips_new_msg" + agencyID, !0);
            $(".frame-message-round") && $(".frame-message-round").css("display", "block")
        }
    }
    ]
});
