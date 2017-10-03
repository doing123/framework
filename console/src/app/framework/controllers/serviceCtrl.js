define(["language-remote/framework",
    "app-remote/framework/localization/config"], function (i18n, localization) {
    "use strict";
    var ctrl = function ($rootScope, $state, $stateParams, mask, storage, $compile, camel) {
        $rootScope.supportLanguage = [["zh-cn", "ÖÐÎÄ£¨¼òÌå£©"], ["en-us", "English"]];
        $rootScope.menus = {
            "url": "src/app/framework/views/menus.html"
        };
        $rootScope.footer = {
            "url": "src/app/framework/views/footer.html"
        };
        $rootScope.changeLanguage = function (language) {
        }
        ;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on("$viewContentLoaded", function (event, target) {
        });
        $rootScope.$on("$includeContentLoaded", function (event, target) {
        });
        $rootScope.genHWSHref = function (href, flag) {
        };
    };
    ctrl.$injector = ["$rootScope", "$state", "$stateParams", "camel"];
    return ctrl;
});
