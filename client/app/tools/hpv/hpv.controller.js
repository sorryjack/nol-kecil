'use strict';

angular.module('nolKecilApp')
  .controller('HpvCtrl', function ($scope, $http, imvus) {
    $scope.sceneUrl = '';

  	$scope.getHiddenProduct = function(){
      if (!$scope.sceneUrl) {
  			return;
  		}
      var decUrl = decodeURIComponent($scope.sceneUrl);

      decUrl = decUrl.replace(/x2/gi, '');
      decUrl = decUrl.slice(6);
      var urlArray = decUrl.split('?');

      $scope.promise = imvus.reveal(urlArray[1]).then(function(data){
        if (data.data instanceof Object) {
          console.log(data.data);
          $scope.results = data.data;
          $scope.faults = false;
        }else{
          $scope.faults = 'error';
          $scope.results = false;
        }
        $scope.sceneUrl = '';
      });
  	};
  });
