/*global require:true,window:true,angular:true,$:true*/
/*jslint node: true */
"use strict";
require.config({
    "baseUrl": "./",
    "waitSeconds": 0,
    "paths": {
        "can": "./lib/can",
        "app": "./src/app",
        "business-app-remote": "./src/app",
        "app-remote": "./src/app",
        "angular": "./lib/angular",
        "ui-router": "./lib/angular-ui/ui-router",
        "bootstrap": "./lib/bootstrap3.3.7/js",
        "moment": "./lib/moment/moment.min",
        "language": "./i18n/default/" + window.urlParams.lang,
        "language-remote": "./i18n/default/" + window.urlParams.lang,
        "lazy-load": "./lib/lazy-load",
        "fixtures": "./fixtures",
        "remote-lib": "./lib"
    },
    "shim": {
        "angular": {exports: "angular"},
        "angular-ui-router": ["angular"]

    }
});
/*require(["remote-lib/analysis"], function(analysis) {
 analysis && analysis.start()
 });*/
//window.wcc = require('wcc');
require(["config.js?" + (new Date()).toISOString().split("T")[0], "orderConfig.js?" + (new Date()).toISOString().split("T")[0]], function () {
    require(["app/framework/framework"], function (app) {
        angular.bootstrap($("html"), [app.name]);
    });
});
