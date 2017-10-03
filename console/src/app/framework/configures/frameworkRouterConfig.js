define([
    "lazy-load/lazyLoad"], function(lazyLoadModule) {
    "use strict";
    var nonsupportRegion = {
            "url": "./src/app/framework/views/nonsupportRegion.html"
        }
        , beingMaintained = {
            "url": "./src/app/framework/views/beingMaintained.html"
        }
        , accessDeclined = {
            "url": "./src/app/framework/views/accessDeclined.html"
        }
        , configArr = [{
            "name": "home",
            "url": "/home"
        }, {
            "name": "nonsupportRegion",
            "url": "/nonsupportRegion",
            "templateUrl": nonsupportRegion.url,
            "controller": "nonsupportRegion.ctrl",
            "scripts": {
                "controllers": ["app-remote/framework/controllers/nonsupportRegionCtrl"]
            }
        }, {
            "name": "beingMaintained",
            "url": "/beingMaintained",
            "templateUrl": beingMaintained.url,
            "controller": "beingMaintained.ctrl",
            "scripts": {
                "controllers": ["app-remote/framework/controllers/beingMaintainedCtrl"]
            }
        }, {
            "name": "accessDeclined",
            "url": "/accessDeclined",
            "templateUrl": accessDeclined.url,
            "controller": "accessDeclined.ctrl",
            "scripts": {
                "controllers": ["app-remote/framework/controllers/accessDeclinedCtrl"]
            }
        }]
        , frmModule = angular.module("frm", ["ui.router"]);
    frmModule = lazyLoadModule.makeLazy(frmModule);
    frmModule.tinyStateConfig({
        "stateConfig": configArr
    });
    frmModule.tinyStateConfig({
        "urlMatch": [["/rds/rdsManagement"]]
    });
    return frmModule
});
