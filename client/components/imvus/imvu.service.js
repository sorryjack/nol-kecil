'use strict';

angular.module('nolKecilApp')
  .factory('imvus', function($http){
    var imvu = 'http://imvus.comule.com/';
//    var imvu = 'http://localhost/imvu/';
    var obj = {};

    obj.manual = function(){
      return $http.get(imvu + 'manual');
    };

    obj.basicInfo = function(name){
      return $http.get(imvu + 'basicInfo?name=' + name);
    };

    obj.productInfo = function(pid){
      return $http.get(imvu + 'productInfo?pid=' + pid);
    };


    return obj;
  });