'use strict';

angular.module('nolKecilApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tools.prodin', {
        url: '/prodin',
        templateUrl: 'app/tools/prodin/prodin.html',
        controller: 'ProdinCtrl'
      });
  });