'use strict';

angular.module('nolKecilApp')
  .controller('ManCtrl', function ($scope,$http,imvus) {
    $scope.manual = '';

    imvus.manual().then(function(data){
 			$scope.manual = data.data;
    });
  });
