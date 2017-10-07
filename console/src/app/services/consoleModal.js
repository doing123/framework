define([], function () {
    "use strict";
    return function () {
        this.options = {
            "title": "Confirm",
            "type": "info",
            "modalClass": "",
            "closeBtn": !0,
            "width": 400,
            "okBtn": {
                "key": "",
                "show": !0,
                "text": "OK",
                "click": function () {
                }
            },
            "cancelBtn": {
                "key": "",
                "show": !0,
                "text": "Cancel",
                "click": function () {
                }
            },
            "content": ""
        };
        this.open = function (options) {
            var self = this;
            self.close();
            self.options = $.extend(!0, self.options, options);
            self.modalTemplate = '<div class="cf-modal cf-fade cf-in"><div class="cf-modal-shadow"></div><div class="cf-modal-dialog ' + self.options.modalClass + '" style="width: ' + self.options.width + 'px;"><div class="cf-modal-content"><div class="cf-modal-header ui-draggable-handle"><span class="cf-icon cf-icon-close ' + (self.options.closeBtn ? "" : "cf-icon-close-hide") + '"></span><span class="cf-border-inline"></span><span class="cf-modal-title">' + self.options.title + '</span></div><div class="cf-modal-body"><div class="cf-msg-content-wrapper"><div class="cf-msg-icon icon-cf-status-' + ("fail" === self.options.type ? "fail-big" : "warn" === self.options.type ? "exception-large" : self.options.type) + '"></div>' + self.options.content + '</div></div><div class="cf-modal-footer"><button type="button" class="cf-btn cf-btn-ok ' + (void 0 === self.options.okBtn.show || self.options.okBtn.show ? "" : "cf-btn-ok-hide") + '" id="' + self.options.okBtn.key + '">' + self.options.okBtn.text + '</button><button type="button" class="cf-btn cf-btn-cancel ' + (void 0 === self.options.cancelBtn.show || self.options.cancelBtn.show ? "" : "cf-btn-cancel-hide") + '" id="' + self.options.cancelBtn.key + '">' + self.options.cancelBtn.text + "</button></div></div></div></div>";
            angular.element(self.modalTemplate).prependTo(angular.element(document.body));
            angular.element(".cf-btn-ok").on("click", function () {
                self.options.okBtn.click()
            });
            angular.element(".cf-btn-cancel").on("click", function () {
                self.options.cancelBtn.click()
            });
            angular.element(".cf-icon-close, .cf-btn-ok, .cf-btn-cancel").on("click", function () {
                self.close()
            })
        };
        this.close = function () {
            angular.element(".cf-modal").remove()
        };
    }
});
