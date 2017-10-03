define(["language-remote/framework", "app-remote/services/tipMsgService", "app-remote/services/cookieService", "app-remote/services/consoleModal"], function(i18n, TipMsgService, Storage, ConsoleModal) {
    "use strict";
    var subRegRex = /\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g
        , sub = function(s, o) {
            return s.replace ? s.replace(subRegRex, function(match, key) {
                return angular.isUndefined(o[key]) ? match : o[key]
            }) : s
        }
        , TIME_OUT = 6e5
        , redirect302 = function(xhr, $state) {
            if (200 === xhr.status && xhr.getResponseHeader("HW-AJAX-REDIRECT")) {
                (new Storage).flush();
                window.location.reload();
                return !1
            }
            if (200 === xhr.status && xhr.getResponseHeader("X-Frame-Maintenance")) {
                $state.go("beingMaintained");
                return !1
            }
            return !0
        }
        , redirect403 = function(xhr, $scope) {
            var href, hrefTarget, consoleModal;
            if (403 === xhr.status && xhr.getResponseHeader("HW-IAM-FORBIDDEN")) {
                href = window.location.href;
                hrefTarget = $scope.delUrlParameter(href, "agencyId");
                if (href !== hrefTarget && !xhr.getResponseHeader("NOT-REFRESH")) {
                    window.location.replace(hrefTarget);
                    return
                }
                if (0 === $("#console_frame_forbidden_confirm").length) {
                    consoleModal = new ConsoleModal;
                    consoleModal.open({
                        "type": "fail",
                        "title": i18n.console_term_note_value,
                        "content": i18n.console_term_errorForbidden_msg,
                        "okBtn": {
                            "key": "console_frame_forbidden_confirm",
                            "text": i18n.console_term_confirm_button,
                            "show": !0,
                            "click": function() {
                                window.location.href = i18n.console_term_portal_link
                            }
                        },
                        "cancelBtn": {
                            "key": "",
                            "text": "",
                            "show": !1,
                            "click": function() {}
                        }
                    })
                }
            }
        }
        , service = function(mask, $q, storage, $rootScope, $state) {
            this.get = function(config) {
                var error, $ajax, deferred = $q.defer(), settings = {
                    "type": "GET",
                    "contentType": "application/json; charset=UTF-8",
                    "timeout": config.timeout || TIME_OUT,
                    "headers": {
                        "X-Language": window.urlParams.lang || "",
                        "cftk": storage.cookieStorage.getItem((window.app_cookie_prefix || "") + "cftk") || "",
                        "AgencyId": $rootScope.getUrlParameter("agencyId", !0) || "",
                        "ProjectName": $rootScope.getUrlParameter("region", !0) || "",
                        "region": $rootScope.selectRegionId || ""
                    },
                    "url": angular.isString(config.url) ? config.url : sub(config.url.s, config.url.o),
                    "data": config.params || {},
                    "beforeSend": function(request, setting) {
                        config.mask && mask.show();
                        config.beforeSend && config.beforeSend(request, setting)
                    },
                    "complete": function(xhr, status) {
                        config.mask && mask.hide();
                        redirect302(xhr, $state);
                        redirect403(xhr, $rootScope)
                    }
                };
                config.contentType && (settings.contentType = config.contentType);
                config.dataType && (settings.dataType = config.dataType);
                config.headers && $.extend(!0, settings.headers, config.headers);
                $ajax = $.ajax(settings);
                error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                    if (data && 503 === data.status) {
                        (new TipMsgService).alert("error", i18n.console_term_503Error_label)
                    } else
                        deferred.reject.apply(deferred, arguments)
                }
                    : function() {
                    deferred.reject.apply(deferred, arguments)
                }
                ;
                $ajax.success(function(data, status, xhr) {
                    redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments)
                }).error(error);
                return deferred.promise
            }
            ;
            this.post = function(config) {
                var error, $ajax, deferred = $q.defer(), settings = {
                    "type": "POST",
                    "contentType": "application/json; charset=UTF-8",
                    "timeout": config.timeout || TIME_OUT,
                    "headers": {
                        "X-Language": window.urlParams.lang,
                        "cftk": storage.cookieStorage.getItem((window.app_cookie_prefix || "") + "cftk") || "",
                        "AgencyId": $rootScope.getUrlParameter("agencyId", !0) || "",
                        "ProjectName": $rootScope.getUrlParameter("region", !0) || "",
                        "region": $rootScope.selectRegionId || ""
                    },
                    "url": angular.isString(config.url) ? config.url : sub(config.url.s, config.url.o),
                    "data": "string" == typeof config.params ? config.params : JSON.stringify(config.params),
                    "beforeSend": function(request, setting) {
                        config.mask && mask.show();
                        config.beforeSend && config.beforeSend(request, setting)
                    },
                    "complete": function(xhr, status) {
                        config.mask && mask.hide();
                        redirect403(xhr, $rootScope)
                    }
                };
                config.contentType && (settings.contentType = config.contentType);
                config.dataType && (settings.dataType = config.dataType);
                $ajax = $.ajax(settings);
                error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                    if (data && 503 === data.status) {
                        (new TipMsgService).alert("error", i18n.console_term_503Error_label)
                    } else
                        deferred.reject.apply(deferred, arguments)
                }
                    : function() {
                    deferred.reject.apply(deferred, arguments)
                }
                ;
                $ajax.success(function(data, status, xhr) {
                    redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments)
                }).error(error);
                return deferred.promise
            }
            ;
            this.deleter = function(config) {
                var error, $ajax, deferred = $q.defer(), settings = {
                    "type": "DELETE",
                    "contentType": "application/json; charset=UTF-8",
                    "timeout": config.timeout || TIME_OUT,
                    "headers": {
                        "X-Language": window.urlParams.lang,
                        "cftk": storage.cookieStorage.getItem((window.app_cookie_prefix || "") + "cftk") || "",
                        "AgencyId": $rootScope.getUrlParameter("agencyId", !0) || "",
                        "ProjectName": $rootScope.getUrlParameter("region", !0) || "",
                        "region": $rootScope.selectRegionId || ""
                    },
                    "url": angular.isString(config.url) ? config.url : sub(config.url.s, config.url.o),
                    "data": config.params ? "string" == typeof config.params ? config.params : JSON.stringify(config.params || {}) : null,
                    "beforeSend": function(request, setting) {
                        config.mask && mask.show();
                        config.beforeSend && config.beforeSend(request, setting)
                    },
                    "complete": function(xhr, status) {
                        config.mask && mask.hide();
                        redirect403(xhr, $rootScope)
                    }
                };
                config.contentType && (settings.contentType = config.contentType);
                config.dataType && (settings.dataType = config.dataType);
                $ajax = $.ajax(settings);
                error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                    if (data && 503 === data.status) {
                        (new TipMsgService).alert("error", i18n.console_term_503Error_label)
                    } else
                        deferred.reject.apply(deferred, arguments)
                }
                    : function() {
                    deferred.reject.apply(deferred, arguments)
                }
                ;
                $ajax.success(function(data, status, xhr) {
                    redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments)
                }).error(error);
                return deferred.promise
            }
            ;
            this.put = function(config) {
                var error, $ajax, deferred = $q.defer(), settings = {
                    "type": "PUT",
                    "contentType": "application/json; charset=UTF-8",
                    "timeout": config.timeout || TIME_OUT,
                    "headers": {
                        "X-Language": window.urlParams.lang,
                        "cftk": storage.cookieStorage.getItem((window.app_cookie_prefix || "") + "cftk") || "",
                        "AgencyId": $rootScope.getUrlParameter("agencyId", !0) || "",
                        "ProjectName": $rootScope.getUrlParameter("region", !0) || "",
                        "region": $rootScope.selectRegionId || ""
                    },
                    "url": angular.isString(config.url) ? config.url : sub(config.url.s, config.url.o),
                    "data": "string" == typeof config.params ? config.params : JSON.stringify(config.params || {}),
                    "beforeSend": function(request, setting) {
                        config.mask && mask.show();
                        config.beforeSend && config.beforeSend(request, setting)
                    },
                    "complete": function(xhr, status) {
                        config.mask && mask.hide();
                        redirect403(xhr, $rootScope)
                    }
                };
                config.contentType && (settings.contentType = config.contentType);
                config.dataType && (settings.dataType = config.dataType);
                $ajax = $.ajax(settings);
                error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                    if (data && 503 === data.status) {
                        (new TipMsgService).alert("error", i18n.console_term_503Error_label)
                    } else
                        deferred.reject.apply(deferred, arguments)
                }
                    : function() {
                    deferred.reject.apply(deferred, arguments)
                }
                ;
                $ajax.success(function(data, status, xhr) {
                    redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments)
                }).error(error);
                return deferred.promise
            }
            ;
            this.patch = function(config) {
                var error, $ajax, deferred = $q.defer(), settings = {
                    "type": "PATCH",
                    "contentType": "application/json; charset=UTF-8",
                    "timeout": config.timeout || TIME_OUT,
                    "headers": {
                        "X-Language": window.urlParams.lang,
                        "cftk": storage.cookieStorage.getItem((window.app_cookie_prefix || "") + "cftk") || "",
                        "AgencyId": $rootScope.getUrlParameter("agencyId", !0) || "",
                        "ProjectName": $rootScope.getUrlParameter("region", !0) || "",
                        "region": $rootScope.selectRegionId || ""
                    },
                    "url": angular.isString(config.url) ? config.url : sub(config.url.s, config.url.o),
                    "data": "string" == typeof config.params ? config.params : JSON.stringify(config.params || {}),
                    "beforeSend": function(request, setting) {
                        config.mask && mask.show();
                        config.beforeSend && config.beforeSend(request, setting)
                    },
                    "complete": function(xhr, status) {
                        config.mask && mask.hide();
                        redirect403(xhr, $rootScope)
                    }
                };
                config.contentType && (settings.contentType = config.contentType);
                config.dataType && (settings.dataType = config.dataType);
                $ajax = $.ajax(settings);
                error = window.app_enable_framework_503 && !config.disable_503 ? function(data) {
                    if (data && 503 === data.status) {
                        (new TipMsgService).alert("error", i18n.console_term_503Error_label)
                    } else
                        deferred.reject.apply(deferred, arguments)
                }
                    : function() {
                    deferred.reject.apply(deferred, arguments)
                }
                ;
                $ajax.success(function(data, status, xhr) {
                    redirect302(xhr, $state) && deferred.resolve.apply(deferred, arguments)
                }).error(error);
                return deferred.promise
            }
            ;
            this.ajax = function(config) {
                var $ajax, settings = {
                    "type": config.type,
                    "contentType": "application/json; charset=UTF-8",
                    "timeout": config.timeout || TIME_OUT,
                    "headers": {
                        "X-Language": window.urlParams.lang,
                        "cftk": storage.cookieStorage.getItem((window.app_cookie_prefix || "") + "cftk") || "",
                        "AgencyId": $rootScope.getUrlParameter("agencyId", !0) || "",
                        "ProjectName": $rootScope.getUrlParameter("region", !0) || "",
                        "region": $rootScope.selectRegionId || ""
                    },
                    "url": angular.isString(config.url) ? config.url : sub(config.url.s, config.url.o),
                    "data": "string" == typeof config.params ? config.params : JSON.stringify(config.params || {}),
                    "beforeSend": function(request, setting) {
                        config.mask && mask.show();
                        config.beforeSend && config.beforeSend(request, setting)
                    },
                    "complete": function(xhr, status) {
                        config.mask && mask.hide();
                        redirect302(xhr, $state);
                        redirect403(xhr, $rootScope)
                    }
                };
                config.contentType && (settings.contentType = config.contentType);
                config.dataType && (settings.dataType = config.dataType);
                $ajax = $.ajax(settings);
                return $ajax
            }
        };
    service.$injector = ["mask", "$q", "storage", "$rootScope", "$state"];
    return service
});
