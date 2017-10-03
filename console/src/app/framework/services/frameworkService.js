define(["", "app-remote/framework/localization/config"], function(fixtures, localizationConfig) {
    "use strict";
    var framework = {
            "beforeSend": function(request, setting) {
                request.setRequestHeader("X-Request-From", "Framework")
            }
        }
        , service = function($q, camel) {
            this.queryEndpoints = function(options) {
                options = options || {};
                return camel.get({
                    "url": window.appWebPath + "/rest/silvan/rest/v1.0/endpoints",
                    "timeout": 6e4,
                    "params": {
                        "start": options.start || 0,
                        "limit": options.limit || 0,
                        "region": options.region
                    },
                    "beforeSend": function(request, setting) {
                        request.setRequestHeader("Frame-Domain-Type", localizationConfig.x_domain_type || "");
                        framework.beforeSend(request, setting)
                    }
                })
            }
            ;
            this.favoriteEndpoints = function(options) {
                options = options || {};
                return camel.get({
                    "url": {
                        "s": window.appWebPath + "/rest/silvan/rest/v1.0/users/{user_id}/endpoints",
                        "o": {
                            "user_id": options.user_id
                        }
                    },
                    "timeout": 6e4,
                    "beforeSend": function(request, setting) {
                        request.setRequestHeader("Frame-Domain-Type", localizationConfig.x_domain_type || "");
                        framework.beforeSend(request, setting)
                    }
                })
            }
            ;
            this.addFavoriteEndpoint = function(options) {
                options = options || {};
                return camel.post({
                    "url": {
                        "s": window.appWebPath + "/rest/silvan/rest/v1.0/users/{user_id}/endpoints/{id}",
                        "o": {
                            "user_id": options.user_id,
                            "id": options.id
                        }
                    },
                    "timeout": 6e4,
                    "beforeSend": function(request, setting) {
                        request.setRequestHeader("Frame-Domain-Type", localizationConfig.x_domain_type || "");
                        framework.beforeSend(request, setting)
                    }
                })
            }
            ;
            this.deleteFavoriteEndpoint = function(options) {
                options = options || {};
                return camel.deleter({
                    "url": {
                        "s": window.appWebPath + "/rest/silvan/rest/v1.0/users/{user_id}/endpoints/{id}",
                        "o": {
                            "user_id": options.user_id,
                            "id": options.id
                        }
                    },
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.queryRegions = function(options) {
                options = options || {};
                return camel.get({
                    "url": window.appWebPath + "/rest/silvan/rest/v1.0/regions",
                    "timeout": 6e4,
                    "params": {
                        "start": options.start || 0,
                        "limit": options.limit || 0
                    },
                    "beforeSend": function(request, setting) {
                        request.setRequestHeader("Frame-Domain-Type", localizationConfig.x_domain_type || "");
                        framework.beforeSend(request, setting)
                    }
                })
            }
            ;
            this.changeRegion = function(options) {
                options = options || {};
                return camel.get({
                    "url": window.appWebPath + "/rest/changeRegion",
                    "timeout": 6e4,
                    "mask": !0,
                    "params": {
                        "project": options.project
                    },
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.queryMaintenanceRegions = function() {
                return camel.get({
                    "url": window.appWebPath + "/rest/maintenanceRegion",
                    "timeout": 6e4,
                    "mask": !0,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.getMessages = function(options) {
                options = options || {};
                return camel.get({
                    "url": window.appWebPath + "/rest/silvan/rest/v1.0/messages",
                    "timeout": 6e4,
                    "params": {
                        "start": options.start || 0,
                        "limit": options.limit || 0
                    },
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.getLinks = function(options) {
                options = options || {};
                return camel.get({
                    "url": window.appWebPath + "/rest/silvan/rest/v1.0/links",
                    "timeout": 6e4,
                    "params": {
                        "key": options.key || "",
                        "type": options.type || ""
                    },
                    "beforeSend": function(request, setting) {
                        request.setRequestHeader("Frame-Domain-Type", localizationConfig.x_domain_type || "");
                        framework.beforeSend(request, setting)
                    }
                })
            }
            ;
            this.getLoginUser = function() {
                return camel.get({
                    "url": window.appWebPath + "/rest/me",
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.queryAccountSum = function() {
                return camel.get({
                    "url": window.appWebPath + "/rest/BSS/OpenApi/v1/accounts/sum/accountinfo",
                    "timeout": 1e4
                })
            }
            ;
            this.heartbeat = function() {
                return camel.get({
                    "url": window.appWebPath + "/rest/heartbeat",
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.getMessagesTypes = function() {
                return camel.get({
                    "url": window.appWebPath + "/rest/silvan/rest/v1.0/messageTypes",
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.getUserChoices = function(options) {
                options = options || {};
                return camel.get({
                    "url": window.appWebPath + "/rest/silvan/rest/v1.0/user_choices",
                    "params": {
                        "userId": options.userId || "",
                        "preferName": options.type || ""
                    },
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.updateUserChoices = function(options) {
                options = options || {};
                return camel.post({
                    "url": window.appWebPath + "/rest/silvan/rest/v1.0/user_choices",
                    "params": {
                        "userId": options.userId || "",
                        "preferName": options.type || "",
                        "preferDisplayName": options.value || "",
                        "preferDesc": options.preferDesc || ""
                    },
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.getAssumeRoles = function(options) {
                options = options || {};
                return camel.get({
                    "url": {
                        "s": window.appWebPath + "/rest/iam/assumeRoles/{user_id}",
                        "o": {
                            "user_id": options.userId
                        }
                    },
                    "params": {
                        "limit": 5
                    },
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.assumeRole = function(options) {
                options = options || {};
                return camel.get({
                    "url": window.appWebPath + "/rest/changeRole",
                    "timeout": 6e4,
                    "mask": !0,
                    "params": {
                        "agencyId": options.agencyId
                    },
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.getUserProjects = function(options) {
                options = options || {};
                var promise;
                promise = "private" === localizationConfig.x_cloud_type ? camel.get({
                    "url": {
                        "s": window.appWebPath + "/rest/iam/v3/users/{user_id}/projects",
                        "o": {
                            "user_id": options.userId
                        }
                    },
                    "timeout": 6e4,
                    "beforeSend": framework.beforeSend
                }) : camel.get({
                    "url": window.appWebPath + "/rest/iam/v3/projects",
                    "timeout": 6e4,
                    "params": {
                        "domain_id": options.domain_id
                    },
                    "beforeSend": framework.beforeSend
                });
                return promise
            }
            ;
            this.queryIamUser = function(userId) {
                return camel.get({
                    "url": {
                        "s": window.appWebPath + "/rest/iam/service/user/{userId}",
                        "o": {
                            "userId": userId
                        }
                    },
                    "timeout": 1e4,
                    "params": {
                        "scope": "imgpaths"
                    },
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.queryMcUserRole = function(mcHost, userId) {
                return camel.get({
                    "url": {
                        "s": mcHost + "rest/mc/v1/{user_id}/role",
                        "o": {
                            "user_id": userId
                        }
                    },
                    "timeout": 1e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.queryMcUnreadCount = function(mcHost, domainId) {
                return camel.get({
                    "url": {
                        "s": mcHost + "rest/mc/v1/{domain_id}/messages/envelope/unread",
                        "o": {
                            "domain_id": domainId
                        }
                    },
                    "timeout": 1e4,
                    "beforeSend": framework.beforeSend
                })
            }
            ;
            this.queryMcMessages = function(mcHost, domainId, params) {
                return camel.get({
                    "url": {
                        "s": mcHost + "rest/mc/v1/{domain_id}/messages",
                        "o": {
                            "domain_id": domainId
                        }
                    },
                    "params": params,
                    "timeout": 1e4,
                    "beforeSend": framework.beforeSend
                })
            }
        };
    service.$injector = ["$q", "camel"];
    return service
});
