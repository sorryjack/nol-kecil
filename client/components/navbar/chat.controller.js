'use strict';

angular.module('nolKecilApp')
  .controller('ChatCtrl', function ($scope,$http,socket,$cookieStore) {
    $scope.newChat = '';
    $scope.nick = ($cookieStore.get('nolKecil')) ? $cookieStore.get('nolKecil').nickname : '';

    $http.get('/api/chats').success(function(chats) {
      $scope.chats = chats;
      socket.syncUpdates('chat', $scope.chats);
    });

    $scope.setNick = function(){
      console.log($scope.newNick);
      if (!$scope.newNick) {
        return;
      }
      $cookieStore.put('nolKecil', { nickname: $scope.newNick });
      $scope.newNick = '';
    };

    $scope.sendChat = function(){
      if (!$scope.newChat || !$scope.nick) {
        return;
      }
      $http.post('/api/chats', { from: $scope.nick, content: $scope.newChat });
      $scope.newChat = '';
    };
  });