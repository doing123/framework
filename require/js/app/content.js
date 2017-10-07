define(['jquery', 'angular', 'module'], function ($, angular, module) {
    var color = module.config().color;
    var a = $('#target').html('toggle');
    console.log(angular.copy(a));
    return {
        //color: 'red',
        color: color,
        size: 4
    }
});