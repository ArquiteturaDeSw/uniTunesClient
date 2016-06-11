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

.controller('UserCtrl', function($scope, $q) {

	$scope.newUserForm = {}
  
	var validateNewUserData = function(newUserForm) {
		if(newUserForm.password && newUserForm.password !== newUserForm.passwordConfirm){
			return $q.reject();
		}

		return $q.resolve();
	}

});
