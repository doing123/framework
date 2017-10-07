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
            url: '/index',
            template: '<div>index content</div>',
            resolve: {
                //这个函数的值会被直接使用，因为它不是数据保证
                user: function () {
                    return {
                        name: 'jack',
                        email: '@163.com'
                    };
                },
                //数据保证，因为它将在控制器被实例化之前载入
                detail: function ($http) {
                    return $http({
                        method: 'GET',
                        url: 'detail.json'
                    });
                },
                //前一个数据保证也可作为依赖注入到其他数据保证中
                myId: function ($http, user) {
                    console.log(user);
                    return 1;
                }
            },
            controller: function (user, myId, detail) {
                console.log(user);
                console.log(myId);
                console.log(detail.data);
            }
        })
        .state('content', {
            url: '/content/{username}',
            template: '<div>content detail</div>',
            controller: function ($stateParams) {
                console.log($stateParams.username);
            }
        });
});