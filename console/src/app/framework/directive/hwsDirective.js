define([], function() {
    "use strict";
    var hwsModule = angular.module("hws", ["ng"]);
    hwsModule.directive("hwsHref", function() {
        return {
            "priority": 100,
            "link": function(scope, elem, attrs) {
                elem.bind("click", function() {
                    var href = elem.attr("href");
                    elem.attr("href", scope.genHWSHref(href))
                })
            }
        }
    });
    hwsModule.directive("localeHref", function() {
        return {
            "priority": 100,
            "link": function(scope, elem, attrs) {
                elem.bind("click", function() {
                    var href = elem.attr("href");
                    elem.attr("href", scope.genHWSHref(href, "locale"))
                })
            }
        }
    })
});
