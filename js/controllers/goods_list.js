(function () {
  'use strict';

  angular.module('AngularShop')
    .controller('GoodsListController', function ($scope, GoodsLoaderService) {
      GoodsLoaderService.load().then(function (responce) {
        $scope.goods = responce.data;
      });
    });
})();
