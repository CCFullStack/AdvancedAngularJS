(function () {
    angular
        .module('AngularAjax', ['ngRoute', 'ngResource'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/ngViews/ajax/ajax.html',
                controller: 'FoodController',
                controllerAs: 'food'
            });
        }]);

    angular
        .module('AngularAjax')
        .service('myService', function () {
            this.something = 'blah';
            this.printSomething = function () {
                console.log(this.something);
            };
        })
        .factory('myFactory', function () {
            return function (thing) {
                console.log(thing);
            };
        })
        .controller('Something', function (myService, myFactory) {
            myService.something = 'Hello World!';
            myService.printSomething();
            myFactory('thing to print');
        });
})();