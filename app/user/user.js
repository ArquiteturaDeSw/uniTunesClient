'use strict';

angular.module('uniTunesApp.User', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro', {
    templateUrl: 'user/new-user.html',
    controller: 'UserCtrl'
  })

  .when('/usuario/perfil', {
      templateUrl: 'user/user.html',
      controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', function($scope) {
  
});
