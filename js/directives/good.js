(function () {
  'use strict';

  angular.module('AngularShop').directive('good', function () {
    return {
      restrict: 'EA',
      replace: false,
      scope: {
        good: '=goodData'
      },
      controller: function ($scope) {
      },
      templateUrl: 'partials/t_shirt.html'
    }
  });
})();