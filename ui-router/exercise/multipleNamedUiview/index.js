var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider.state('main', {
        url: '/main',
        views: {
            "nav": {template: '<div class="left">left</div>'},
            "content": {template: '<div class="right">content</div>'}
        }
    });
    $stateProvider.state({
        name: 'home',
        url: '/home',
        template: '<h1>home</h1>'
    });
    $stateProvider.state({
        name: 'backup',
        url: '/backup',
        template: '<h1 ui-sref="backup.content">backup</h1><div ui-view></div>'
    });
    $stateProvider.state({
        name: 'backup.content',
        url: '/content',
        template: '<h1>content</h1>'
    });
});