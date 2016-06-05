'use strict';

angular.module('uniTunesApp.User', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/cadastro', {
    templateUrl: 'user/new-user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', function($scope) {
  
});
