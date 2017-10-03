define(["ui-router/angular-ui-router"], function (router) {
    var lazy = angular.module("lazy", ["ui.router"]);
    lazy.makeLazy = function (module) {
        module.config(function ($compileProvider, $filterProvider, $controllerProvider, $provide) {
            module.tinyDirective = lazy.register($compileProvider.directive);
            module.tinyFilter = lazy.register($filterProvider.register);
            module.tinyController = lazy.register($controllerProvider.register);
            module.tinyProvider = lazy.register($provide.provider);
            module.tinyService = lazy.register($provide.service);
            module.tinyFactory = lazy.register($provide.factory);
            module.tinyValue = lazy.register($provide.value);
            module.tinyConstant = lazy.register($provide.constant);
        });
        module.tinyStateConfig = function (routerConfig) {
            function isConfigArrayLike(config) {
                return angular.isArray(config) && config.length > 0;
            }

            if (!angular.isObject(routerConfig)){
                return;
            }
            module.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
                if (isConfigArrayLike(routerConfig.stateConfig)) {
                    var normalConfig = null;
                    angular.forEach(routerConfig.stateConfig, function (stateConfig, key) {
                        normalConfig = lazy.parseConfig(stateConfig);
                        $stateProvider.state(normalConfig)
                    });
                }
                isConfigArrayLike(routerConfig.urlMatch) && angular.forEach(routerConfig.urlMatch, function (urlMatch, key) {
                    2 === urlMatch.length ? $urlRouterProvider.when(urlMatch[0], urlMatch[1]) : 1 === urlMatch.length && $urlRouterProvider.otherwise(urlMatch[0])
                });
            }
            ]);
        };
        return module;
    }
    ;
    lazy.register = function (registrationMethod) {
        return function (name, constructor) {
            registrationMethod(name, constructor)
        }
    }
    ;
    lazy.parseConfig = function (stateConfig) {
        if (!stateConfig.scripts)
            return stateConfig;
        stateConfig.resolve = stateConfig.resolve || {};
        stateConfig.resolve.deps = function ($q, $rootScope) {
            function load(url) {
                var deferred = $q.defer();
                if (null === url) {
                    deferred.resolve();
                    return deferred.promise
                }
                require(url, function () {
                    $rootScope.$apply(function () {
                        deferred.resolve()
                    })
                });
                return deferred.promise
            }

            return $q.all([load(stateConfig.scripts.directives || null), load(stateConfig.scripts.controllers || null), load(stateConfig.scripts.services || null), load(stateConfig.scripts.factories || null), load(stateConfig.scripts.js || null)])
        }
        ;
        return stateConfig
    }
    ;
    return lazy
});
