'use strict';

angular.module('nolKecilApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tools.basic', {
        url: '/basic',
        templateUrl: 'app/tools/basic/basic.html',
        controller: 'BasicCtrl'
      });
  });