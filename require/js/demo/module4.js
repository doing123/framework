define([], function () {
    var module = {
        id: 'module4'
    };
    console.log('module4加载了。。。');
    console.log('module3依赖module4');
    return module;
});