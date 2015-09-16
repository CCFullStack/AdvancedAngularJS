(function () {
    angular
        .module('PetShop')
        .controller('PetShopController', function () {
            this.categories = {
                dogs: {
                    title: 'Dogs',
                    pets: [
                        { name: 'Rover', image: 'https://www.petfinder.com/wp-content/uploads/2012/11/122163343-conditioning-dog-loud-noises-632x475.jpg' },
                        { name: 'Havoc', image: '/Content/havoc.jpg' }
                    ]
                },
                bunnies: {
                    title: 'Bunnies',
                    pets: [
                        { name: 'Fred', image: 'http://www.urbanfarmonline.com/images/rabbit-keeping/rabbit-stats_490.jpg' },
                        { name: 'Rabbit of Caerbannog', image: 'http://static.comicvine.com/uploads/original/11/113883/3828805-5999894397-kille.jpg' }
                    ]
                }
            };
        });

    angular
        .module('DataBinding')
        .controller('FavoriteColorController', function () {
            this.color = 'red';
            this.pickColor = function (color) {
                this.color = color;
            }
        });

    angular
        .module('DataBinding')
        .controller('CalculatorController', function () {
            var _num1 = 0;
            var _num2 = 0;
            
            Object.defineProperty(this, 'num1', {
                set: function (value) {
                    _num1 = parseFloat(value);
                },
                get: function () {
                    return _num1;
                }
            });
            Object.defineProperty(this, 'num2', {
                set: function (value) {
                    _num2 = parseFloat(value);
                },
                get: function () {
                    return _num2;
                }
            });
            Object.defineProperty(this, 'result', {
                get: function () {
                    return _num1 + _num2;
                }
            })
        });
})();

(function () {
    angular
        .module('AngularRouting')
        .controller('ViewAController', function ($location) {
            this.message = "Hello from View A!";
            this.move = function (id) {
                $location.path('viewB/' + id);
            };
        });
    angular
        .module('AngularRouting')
        .controller('ViewBController', function ($routeParams) {
            this.message = "Hello from View B! You " +
                "requested id " + $routeParams.id;
        });
})();