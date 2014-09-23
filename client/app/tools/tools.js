'use strict';

angular.module('nolKecilApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tools', {
        url: '/tools',
        templateUrl: 'app/tools/tools.html',
        controller: 'ToolsCtrl'
      });
  });