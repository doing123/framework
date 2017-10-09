var myApp = angular.module('hellogalaxy', ['ui.router']);
var testArr = [{
    id: 1,
    name: 'qjs001'
}, {
    id: 2,
    name: 'qjs002'
}, {
    id: 3,
    name: 'qjs003'
}];
myApp.config(function ($stateProvider) {
    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>its the ui-router hello world app!</h3>'
    };
    var helloGalaxy = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    };
    var peopleState = {
        name: 'people',
        url: '/people',
        component: 'people',
        resolve: {
            people: function ($q, $timeout) {
                /**
                 * 异步数据获取
                 */
                var deferred = $q.defer();
                 $timeout(function(){
                    deferred.resolve(testArr);
                }, 1000);
                return deferred.promise;
                //return testArr;
            }
        }
    };
    var personState = {
        name: 'people.person',
        url: '/{personId}',
        component: 'person',
        resolve: {
            person: function (people, $stateParams) {
                return people.find(function (person) {
                    return String(person.id) === $stateParams.personId;
                });
            }
        }
    };
    $stateProvider.state(aboutState);
    $stateProvider.state(helloGalaxy);
    $stateProvider.state(peopleState);
    $stateProvider.state(personState);
});
myApp.component('hello', {
    template: '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
    '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
    controller: function () {
        this.greeting = 'hello';
        this.toggleGreeting = function () {
            this.greeting = (this.greeting === 'hello') ? 'whats up' : 'hello';
        };
    }
});
myApp.component('people', {
    bindings: {people: '<'},
    template: '<h3>Some people:</h3>' +
    '<ul>' +
    '  <li ng-repeat="person in $ctrl.people">' +
    '    <a ui-sref="people.person({ personId: person.id })">' +
    '      {{person.name}}' +
    '    </a>' +
    '  </li>' +
    '</ul>' +
    '<ui-view></ui-view>',//state nest
    /*controller:function(people){
        console.log(people);
    }*/
});
myApp.component('person', {
    bindings: {person: '<'},
    template: '<h3>it\'s:{{$ctrl.person.name}}</h3><h3>id:{{$ctrl.person.id}}</h3>' +
    '<input type="button" ui-sref="people" value="Close" />'
});