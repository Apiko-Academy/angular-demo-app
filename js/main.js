(function () {
  'use strict';

  angular.module('AngularShop', ['ngRoute', 'AngularShop.cart'])
    .config(function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'partials/goods_list.html',
        controller: 'GoodsListController'
      }).otherwise('/');
    });

  angular.module('AngularShop.cart', []);

})();