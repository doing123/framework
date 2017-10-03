var myApp = angular.module('hellogalaxy', ['ui.router']);
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
            people: function (PeopleService) {
                return PeopleService.getAllPeople();
            }
        }
    };
    var personState = {
        name: 'person',
        url: '/people/{personId}',
        component: 'person',
        resolve: {
            people: function (PeopleService, $transition$) {
                return PeopleService.getAllPerson($transition$.params().personId);
            }
        }
    };
    $stateProvider.state(aboutState);
    $stateProvider.state(helloGalaxy);
    $stateProvider.state(peopleState);
    $stateProvider.state(personState);
});
angular.module('hellogalaxy').component('hello', {
    template: '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
    '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
    controller: function () {
        this.greeting = 'hello';
        this.toggleGreeting = function () {
            this.greeting = (this.greeting === 'hello') ? 'whats up' : 'hello';
        };
    }
});
angular.module('hellogalaxy').component('people', {
    bindings: {people: '<'},
    template: '<h3>Some people:</h3>' +
    '<ul>' +
    '  <li ng-repeat="person in $ctrl.people">' +
    '    <a ui-sref="person({ personId: person.id })">' +
    '      {{person.name}}' +
    '    </a>' +
    '  </li>' +
    '</ul>'
});