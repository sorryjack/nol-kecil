'use strict';

angular.module('nolKecilApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tools.hpv', {
        url: '/HiddenProductViewer',
        templateUrl: 'app/tools/hpv/hpv.html',
        controller: 'HpvCtrl'
      });
  });