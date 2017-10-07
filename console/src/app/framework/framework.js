/*global define:true,window:true,angular:true*/
/*jshint -W030*/
/* jshint -W097 */
define(["angular-animate",
        "ui-router/angular-ui-router",
        "language-remote/widgetsLanguage",
        "language-remote/tiny2Language",
        "language-remote/tinyPlusLang",
        "app-remote/framework/directive/hwsDirective",
        "app-remote/services/maskService",
        "app-remote/services/httpService",
        "app-remote/services/cookieService",
        "app-remote/services/exceptionService",
        "app-remote/framework/controllers/serviceCtrl",
        "app-remote/framework/controllers/menusCtrl",
        "app-remote/framework/services/frameworkService",
        "app-remote/services/utilService",
        "app-remote/services/messageService",
        "app-remote/services/localeService",
        "app/framework/configures/frameworkRouterConfig",
        "app/business/rds/configures/rdsRouterConfig"],
    function (ngAnimate, router, widgetsLanguage, tiny2Language, tinyPlusLang,
              hws, mask, http, storage, exception, serviceCtrl, menusCtrl, frameworkServ,
              utilService, msgService, localeService, frameworkConfig, rdsConfig) {
        "use strict";
        var dependency, framework, $locale, locale;
        window.tinyLanguage || (window.tinyLanguage = {});
        window.tinyLanguage.language = widgetsLanguage;
        window.tiny || (window.tiny = {});
        window.tiny.language = tiny2Language;
        window.tinyPlus || (window.tinyPlus = {});
        window.tinyPlus.language = tinyPlusLang;
        dependency = [
            "ng",
            "ngAnimate",
            "ui.router",
            "hws",
            frameworkConfig.name,
            rdsConfig.name];
        framework = angular.module("framework", dependency);
        framework.value("globalRegionName", "");
        framework.value("currentService", "");
        framework.value("favoriteServiceMax", 7);
        framework.value("heartbeatInterval", 3e5);
        framework.value("sharedProperties", {});
        framework.controller("serviceCtrl", serviceCtrl);
        framework.controller("menusCtrl", menusCtrl);
        framework.service("mask", mask);
        framework.service("camel", http);
        framework.service("exception", exception);
        framework.service("storage", storage);
        framework.service("frameworkService", frameworkServ);
        framework.service("utilService", utilService);
        framework.service("msgService", msgService);
        framework.service("localeService", localeService);
        window.appWebPath = "/rds";
        framework.config(["$controllerProvider", "$compileProvider",
            function ($controllerProvider, $compileProvider) {
                framework.controllerProvider = $controllerProvider;
                framework.compileProvider = $compileProvider;
            }
        ]);
        framework.run(["$rootScope", "$timeout", function ($rootScope, $timeout) {
            $rootScope.cti = window.tinyPlus.utils;
            $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
            });
        }
        ]);
        $locale = angular.injector(["ng"]).get("$locale");
        locale = $.extend(!0, $locale, widgetsLanguage.locale);
        angular.module("ngLocale").config(function ($provide) {
            $provide.value("$locale", locale)
        });
        return framework;
    });
