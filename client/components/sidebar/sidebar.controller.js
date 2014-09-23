'use strict';

angular.module('nolKecilApp')
  .controller('SidebarCtrl', function ($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });