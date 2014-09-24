'use strict';

angular.module('nolKecilApp')
  .controller('BasicCtrl', function ($scope, $http, imvus) {
    $scope.aviName = '';
    $scope.results = '';
    $scope.faults = '';

    $scope.getInfo = function(){
    	if (!$scope.aviName) {
    		return;
    	}
			imvus.basicInfo($scope.aviName).then(function(data){
        if (data.data.userId) {
          $scope.faults = '';
          $scope.results = data.data;
          $scope.results.hasAccessPass = ($scope.results.hasAccessPass === 1) ? 'yes' : 'no';
          $scope.results.isGuest = ($scope.results.isGuest === 1) ? 'yes' : 'no' ;
          $scope.results.verifiedEmail = ($scope.results.verifiedEmail === 1) ? 'yes' : 'no' ;
        }else{
          $scope.results = '';
          $scope.faults = data.data;
        }
			});
			$scope.aviName = '';
    };
  });
