require.config({
    config: {},
    //如果在配置中没有显式设置baseUrl，则默认值将是加载require.js的HTML页面的位置。
    //如果使用data-main属性，则该main.js路径将成为baseUrl。
    baseUrl: '../../js',
    paths: {
        'lib': 'lib',
        'app': 'app',
        'demo': 'demo',
        'module5': 'demo/module5'
    },
    shim: {
        'lib/jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'lib/angular': {
            deps: ['lib/jquery'],
            exports: 'angular'
        }
    },
    map: {
        'demo/module1': {
            'jquery': 'ib/jquery'
        },
        'demo/module2': {
            'jquery': 'lib/jquery-3.2.1'
        }
    }
});
require(['demo/module1',
    'demo/module2',
    './demo/module3',
    'demo/module4',
    'module5',
    //jquery没有返回值，参数里不写
    'lib/jquery'], function (module1, module2, module3, module4, module5) {
    $('#target').html('各模块已经成功加载！');
    console.log(module1.id);
    console.log(module2.id);
    console.log(module3.id);
    console.log(module4.id);
    console.log(module5.id);
});
