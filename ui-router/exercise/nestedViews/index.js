var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('main');
    /*$stateProvider
        .state('main', {
            url: '/main',
            template: '<div ui-sref="main.nav" class="top">main</div><ui-view></ui-view>'
        })
        .state('main.nav', {
            url: '/nav',
            template: '<div ui-sref="main.nav.content" class="left">left</div><ui-view></ui-view>'
        })
        .state('main.nav.content', {
            url: '/content',
            template: '<div class="right">content</div>'
        });*/
    $stateProvider
        .state({
            name:'main',
            url: '/main',
            template: '<div ui-sref="main.nav" class="top">main</div><ui-view></ui-view>'
        })
        .state({
            name:'main.nav',
            url: '/nav',
            template: '<div ui-sref="main.nav.content" class="left">left</div><ui-view></ui-view>'
        })
        .state({
            name:'main.nav.content',
            url: '/content',
            template: '<div class="right">content</div>'
        });
});