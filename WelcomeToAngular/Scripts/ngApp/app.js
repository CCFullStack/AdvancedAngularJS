(function () {
    'use strict';

    angular.module('PetShop', []);
    angular.module('DataBinding', []);
    angular.module('Val', []);

    angular
        .module('AngularRouting', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngViews/viewA.html',
                    controller: 'ViewAController',
                    controllerAs: 'main'
                })
                .when('/viewA', {
                    templateUrl: '/ngViews/viewA.html',
                    controller: 'ViewAController',
                    controllerAs: 'main'
                })
                .when('/viewB/:id', {
                    templateUrl: '/ngViews/viewB.html',
                    controller: 'ViewBController',
                    controllerAs: 'main'
                })
                .otherwise({
                    templateUrl: '/ngViews/notFound.html'
                });
        });
})();