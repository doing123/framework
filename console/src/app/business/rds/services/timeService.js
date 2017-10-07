define(["jquery"], function ($) {
    "use strict";
    var service = function () {

    };
    var rdsModule = angular.module("rds.config");
    rdsModule.tinyService("timeFormat", service);
    return rdsModule;
});
