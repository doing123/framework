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
        "angular": "./lib/angular/angular",
        "angular-animate": "./lib/angular/angular-animate",
        "ui-router": "./lib/angular-ui/ui-router",
        "bootstrap": "./lib/bootstrap3.3.7/js",
        "language": "./i18n/default/" + window.urlParams.lang,
        "language-remote": "./i18n/default/" + window.urlParams.lang,
        "lazy-load": "./lib/lazy-load",
        "fixtures": "./fixtures",
        "remote-lib": "./lib"
    },
    "shim": {
        "angular": {
            exports: "angular",
            deps: ["jquery"]
        },
        "angular-ui-router": ["angular"],
        "angular-animate": ["angular"]

    }
});
require(["config.js?" + (new Date()).toISOString().split("T")[0], "orderConfig.js?" + (new Date()).toISOString().split("T")[0]], function () {
    require(["app/framework/framework"], function (app) {
        angular.bootstrap($("html"), [app.name]);
    });
});
