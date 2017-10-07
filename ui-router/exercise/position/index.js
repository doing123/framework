var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider){
    $stateProvider.state('main', {
        url:'/main',
        views:{
            "nav":{template:'<div class="left">left</div>'},
            "content":{template:'<div class="right">content</div>'}
        }
    });
});