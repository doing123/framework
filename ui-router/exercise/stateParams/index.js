var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    /**
     * $urlRouterProvider.otherwise():设置默认路由状态
     */
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<h1>home</h1>'
        })
        .state('index', {
            /**
             * url路由传参：通过$stateParams服务获取参数
             * 有url:'/index/:id',和url:'/index/{id}',两种形式传参
             */
            url: '/index/:id',
            template: '<div>index content</div>',
            controller: function ($stateParams) {
                console.log(arguments);
                console.log($stateParams.id);
            }
        })
        .state('content', {
            url: '/content/{username}',
            template:'<div>content detail</div>',
            controller:function($stateParams){
                console.log($stateParams.username);
            }
        });
});