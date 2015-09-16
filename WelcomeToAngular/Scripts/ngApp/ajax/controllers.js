(function () {
    angular
        .module('AngularAjax')
        .controller('FoodController', function ($resource, $http) {
            var self = this;
            
            var FoodApi = $resource('/api/food/:id');

            self.items = FoodApi.query();

            self.add = function () {
                var newFood = new FoodApi({
                    Name: self.name,
                    Price: self.price
                });
                newFood.$save(function (result) {
                    self.items.push(result);
                });
            };

            self.update = function (itemToUpdate) {
                itemToUpdate.$save();
                self.updateItem = null;
            };

            self.remove = function (itemToRemove) {
                itemToRemove.$remove({ id: itemToRemove.Id }, function () {
                    self.items = self.items.filter(function (item) {
                        return item.Id !== itemToRemove.Id;
                    });
                });
            };
        });
})();