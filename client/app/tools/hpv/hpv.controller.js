'use strict';

angular.module('nolKecilApp')
  .controller('HpvCtrl', function ($scope, $http, imvus) {
    $scope.sceneUrl = '';

  	$scope.getHiddenProduct = function(){
      if (!$scope.sceneUrl) {
  			return;
  		}
      var decUrl = decodeURIComponent($scope.sceneUrl);

      decUrl = decUrl.replace(/x2/gi, "");
      decUrl = decUrl.slice(6);

      var urlArray = decUrl.split('?');

      imvus.reveal(urlArray[1]).then(function(data){
        $scope.results = data.data;
      });
      $scope.sceneUrl = '';
  	};
  });
