define(["app-remote/services/tipMsgService"], function (TipMessageService) {
    "use strict";
    return function () {
        var tipMessage = new TipMessageService;
        this.doException = function (response, widget) {
            tipMessage.alert("error", response.message)
        }
        ;
        this.isException = function (response) {
            if (!response || /^2\d\d$/.test(response.status) || "" === response.responseText && 401 !== response.status)
                return !1;
            return !0
        }
    }
});
