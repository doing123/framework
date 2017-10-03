define([], function () {
    var dashboardCtrl = ['$rootScope', function ($rootScope) {
        console.log('rdsCtrl');
    }];
    var dashboardModule = angular.module('rds.config');
    dashboardModule.tinyController('dashboard.ctrl', dashboardCtrl);
    return dashboardModule;
});