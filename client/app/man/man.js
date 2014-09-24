'use strict';

angular.module('nolKecilApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('man', {
        url: '/man',
        templateUrl: 'app/man/man.html',
        controller: 'ManCtrl'
      });
  });