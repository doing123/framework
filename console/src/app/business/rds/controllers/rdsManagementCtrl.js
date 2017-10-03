define([], function () {
    var managementCtrl = ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
        $scope.click = function () {
            $state.go('rds.dashboard');
        };
    }];
    var managementModule = angular.module('rds.config');
    managementModule.tinyController('rdsManagement.ctrl', managementCtrl);
    return managementModule;
});