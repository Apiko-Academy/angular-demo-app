(function () {
  'use strict';

  angular.module('AngularShop').factory('GoodsLoaderService', function ($http) {
    return {
      load: function () {
        return $http.get('data/goods.json');
      }
    }
  });
})();