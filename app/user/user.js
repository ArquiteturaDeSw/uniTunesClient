'use strict';

angular.module('uniTunesApp.User', ['ngRoute', 'pathgather.popeye'])

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

.controller('UserCtrl', function($scope, $q, Popeye) {

	$scope.newUserForm = {}

	$scope.submitNewUserForm = function(){
		validateNewUserData($scope.newUserForm)
	}


	// *************************************************************


	var showModal = function(template){
		var modal = Popeye.openModal({
	      templateUrl: template,
	    });
	}
  
	var validateNewUserData = function(newUserForm) {
		if(newUserForm.password != newUserForm.passwordConfirm){
			console.log('[WARN] Invalid password confirmation!')
			showModal('user/modal-password-confirmation-failed.html')
			return $q.reject()
		}

		return $q.resolve()
	}

});
