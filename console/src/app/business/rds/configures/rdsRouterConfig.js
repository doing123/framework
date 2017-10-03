define(["lazy-load/lazyLoad"], function (lazyLoadModule) {
    "use strict";
    function getAttr(scope, attr) {
        var data = null;
        try {
            data = scope.$eval(attr)
        } catch (e) {
            data = null
        }
        return data
    }

    var configArr = [{
            "name": "rds",
            "url": "/rds",
            "templateUrl": "src/app/business/rds/views/rds.html",
            "controller": "rds.ctrl",
            "scripts": {
                "controllers": ["app/business/rds/controllers/rdsCtrl"],
                "services": [],
                "js": []
            }
        }, {
            "name": "rds.rdsManagement",
            "url": "/rdsManagement",
            "templateUrl": "src/app/business/rds/views/rdsManagement.html",
            "controller": "rdsManagement.ctrl",
            "scripts": {
                "controllers": ["app/business/rds/controllers/rdsManagementCtrl"],
                "services": [],
                "js": []
            }
        }, {
            "name": "rds.dashboard",
            "url": "/dashboard",
            "templateUrl": "src/app/business/rds/views/dashboard.html",
            "controller": "dashboard.ctrl",
            "scripts": {
                "controllers": ["app/business/rds/controllers/dashboardCtrl"],
                "services": [],
                "js": []
            }
        }]
        , rdsModule = angular.module("rds.config", ["ui.router"]);
    rdsModule = lazyLoadModule.makeLazy(rdsModule);
    rdsModule.tinyStateConfig({
        "stateConfig": configArr
    });
    return rdsModule
});
