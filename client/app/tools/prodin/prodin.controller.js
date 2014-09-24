'use strict';

angular.module('nolKecilApp')
  .controller('ProdinCtrl', function ($scope,$http,imvus) {
  	$scope.prodid = '';

    $scope.getInfo = function(){
    	if (!$scope.prodid) {
    		return;
    	}
    	imvus.productInfo($scope.prodid).then(function(data){
    		console.log(data.data);
    		if (data.data.denomination) {
    			$scope.faults = '';
    			$scope.results = data.data;
    		} else {
    			$scope.results = '';
    			$scope.faults = data.data;
    		}
    	});
    	$scope.prodid = '';
    };
  });
