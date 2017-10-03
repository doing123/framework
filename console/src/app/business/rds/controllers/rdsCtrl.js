define([], function () {
    var rdsCtrl = ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.rds = "test1";
    }];
    var rdsModule = angular.module('rds.config');
    rdsModule.tinyController('rds.ctrl', rdsCtrl);
    return rdsCtrl;
});