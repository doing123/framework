require.config({
    //config:常常需要将配置信息传给一个模块
    config: {
        'app/content': {
            'size': 10,
            'color': 'blue'
        },
        'app/bar':{
            'size':'bar-11',
            'color':'bar-blue'
        }
    },
    //所有模块的查找根路径
    baseUrl: 'js',
    //path映射那些不直接放置于baseUrl下的模块名。设置path时起始位置是相对于baseUrl的，除非该path设置以"/"开头或含有URL协议（如http:）。
    paths: {
        'app': './app',
        'index': 'index',
        'lib': './lib',
        //此处必须配置jquery是lib/jquery.js文件，否则shim中配置无效
        'jquery': './lib/jquery',
        'underscore': './lib/underscore',
        'angular': './lib/angular'
    },
    //为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
    shim: {
        'jquery': {exports: '$'},
        'underscore': {exports: '_'},
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        }
    },
    //map: 对于给定的模块前缀，使用一个不同的模块ID来加载该模块。
    map: {}
});
/*
 require(['app/content', 'lib/underscore'], function (content, _) {
 console.log(content);
 console.log(_);//undefined
 });*/
require(['app/content', 'underscore'], function (content, _) {
    console.log(content);
    console.log(_);
});
require(['app/bar'], function(bar){
    console.log(bar);
});
