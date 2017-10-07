var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    /**
     * $urlRouterProvider.otherwise():设置默认路由状态
     */
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('index', {
            /**
             * @的作用：是用来绝对定位的，即说明该ui-router属于哪个模块，如：’header@index‘表示名为header的
             * view属于index模块，绝对和相对路径的效果一样。
             */
            url: '/index',
            views: {
                "index": {
                    template: '<div><div ui-view="header"></div>' +
                    '<div ui-view="nav"></div>' +
                    '<div ui-view="body"></div></div>'
                },
                //这里必须绝对定位
                "header@index": {template: '<div>header</div>'},
                "nav@index": {template: '<div>nav</div>'},
                "body@index": {template: '<div>contents</div>'}
            }
        })
        .state('index.content1', {
            url:'/content1',
            views:{
                //绝对定位
                'body@index':{template:'<div>content-------1111111111</div>'}
            }
        })
        .state('index.content2',{
            url:'/content2',
            views:{
                //相对定位
                'body':{template:'<div>content-----------2222222222</div'}
            }
        })
        .state('home',{
            url:'/home',
            template:'<h1>home</h1>'
        });
});