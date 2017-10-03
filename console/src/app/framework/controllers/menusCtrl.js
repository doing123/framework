define(["bootstrap/bootstrap.min",
        "app-remote/framework/localization/config"],
    function (bootstrap, localizationConfig) {
        "use strict";
        var ctrl = function ($rootScope, frameworkService, globalRegionName, currentService, $sce, $state, $location, storage) {

        };
        ctrl.$injector = ["$rootScope", "frameworkService", "globalRegionName", "currentService", "$state", "$location"];
        return ctrl;
    });
