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

.controller('UserCtrl', function($scope, $q, $location, Popeye, UserService) {

	$scope.newUserForm = {}

	$scope.submitNewUserForm = function(){
		validateNewUserData($scope.newUserForm).then(registerUser).then(redirectToCatalog)
	}

	// *************************************************************

	var showModal = function(template){
		var modal = Popeye.openModal({
	      templateUrl: template,
	    });
	}

	var redirectToCatalog = function(){
		$location.path('/media_catalog')
	}

	var registerUser = function(newUserForm){
		return UserService.saveNewUser(newUserForm)
	}
  
	var validateNewUserData = function(newUserForm) {
		if(newUserForm.password != newUserForm.passwordConfirm){
			console.log('[WARN] Invalid password confirmation!')
			showModal('user/modal-password-confirmation-failed.html')
			return $q.reject()
		}
		return $q.resolve(newUserForm)
	}

})

.factory('UserService', ['$http', '$q', function($http, $q) {
   
    var saveNewUser = function(newUserForm){
    	//TODO: API
        console.log('[INFO] Usuário salvo: ' + JSON.stringify(newUserForm))
        return $q.resolve()
    }
      
    return {
        saveNewUser: function(newUserForm) {
        	return saveNewUser(newUserForm);
        }
    }
}]);
