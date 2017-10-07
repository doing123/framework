define(["language-remote/framework",
    "app-remote/framework/localization/config",
    "app-remote/services/cookieService"], function (i18n, localizationConfig, Storage) {
    "use strict";
    var storage, tipMessage;
    $.fn.alert = function () {
        var self = $(this);
        self.find(".close").bind("click", function () {
            self.remove()
        })
    }
    ;
    storage = new Storage;
    tipMessage = function ($timeout) {
        var target, types, images, fade_duration, auto_fade_alerts_delay;
        $timeout || ($timeout = setTimeout);
        target = "#frame-cloud-messages-tips";
        types = ["error", "success"];
        images = {
            "success": {
                "url": "./theme/default/images/cloud-tips-success.png"
            },
            "error": {
                "url": "./theme/default/images/cloud-tips-error.png"
            }
        };
        fade_duration = 2e3;
        auto_fade_alerts_delay = 5e3;
        this.alert = function (type, message, marginLeft, width) {
            this.alertCore(!1, type, message, marginLeft, width)
        }
        ;
        this.alertAdaptive = function (type, message, marginLeft, width) {
            this.alertCore(!0, type, message, marginLeft, width)
        }
        ;
        this.alertCore = function (adaptiveFlag, type, message, marginLeft, width) {
            var messageTemplate = $('<div class="alert alert-block fade in frame-cloud-alert-block frame-normal-font-size"><a class="close frame-cloud-close" data-dismiss="alert">&times;</a><p></p></div>');
            if (type === types[0])
                messageTemplate.addClass("frame-cloud-alert-error");
            else {
                if (type !== types[1])
                    return;
                messageTemplate.addClass("frame-cloud-alert-success")
            }
            adaptiveFlag && ($(".leftContainer") && $(".leftContainer").length || $(".left-container") && $(".left-container").length || $(".tiny-layout-west") && $(".tiny-layout-west").length ? $(target).css("padding-left", 242) : $(target).css("padding-left", 0));
            marginLeft && messageTemplate.css({
                "margin-left": marginLeft
            });
            width && messageTemplate.css({
                "width": width
            });
            messageTemplate.find("p").append('<img class="frame-cloud-message-img" src="' + images[type].url + '">').append($.encoder.encodeForHTML(message));
            messageTemplate.alert();
            messageTemplate.hide().prependTo(target).fadeIn(100);
            this.autoDismissAlert(messageTemplate);
            message && this.storageMsg(type, message);
            return messageTemplate
        }
        ;
        this.clearErrorMessages = function () {
            $(target + " .alert.frame-cloud-alert-error").remove()
        }
        ;
        this.clearSuccessMessages = function () {
            $(target + " .alert.frame-cloud-alert-success").remove()
        }
        ;
        this.clearAllMessages = function () {
            this.clearErrorMessages();
            this.clearSuccessMessages()
        }
        ;
        this.autoDismissAlerts = function () {
            var self = this;
            $(target + " .alert").each(function (index, alert) {
                var $alert = $(this)
                    , types = $alert.attr("class").split(" ");
                $.grep(types, function (value) {
                    return -1 !== $.inArray(value, types)
                }).length > 0 && self.autoDismissAlert($alert)
            })
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
        ;
        this.autoDismissAlert = function (itemMessage) {
            $timeout(function () {
                itemMessage.fadeOut(fade_duration).remove()
            }, auto_fade_alerts_delay)
        }
        ;
        this.init = function () {
            var self = this;
            $("a.ajax-modal").click(function () {
                self.clearAllMessages()
            });
            self.autoDismissAlerts()
        }
        ;
        this.init()
    }
    ;
    return tipMessage
});
