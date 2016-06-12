'use strict';

angular.module('uniTunesApp.User', ['ngRoute', 'pathgather.popeye'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro', {
    templateUrl: 'user/new-user.html',
    controller: 'UserCtrl'
  })

  .when('/usuario', {
      templateUrl: 'user/user-list.html',
      controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', function($scope, $q, $location, Popeye, UserService) {

	$scope.newUserForm = {}
	$scope.usersList = []
	$scope.usersFilter = {}

	$scope.submitNewUserForm = function(){
		validateNewUserData($scope.newUserForm)
			.then(registerUser)
			.then(redirectToCatalog)
	}

	$scope.listUsers = function(){
		UserService.listUsers()
			.then(filterUsers)
			.then(function(list){
				console.log(JSON.stringify(list))
				$scope.usersList = list
			})
	}

	$scope.clearFilter = function(){
		$scope.usersFilter = {}
	}

	var filterUsers = function(usersList){
		var list = []

		$scope.usersFilter.name = $scope.usersFilter.name ? $scope.usersFilter.name.toLowerCase() : ''
		$scope.usersFilter.status = $scope.usersFilter.status ? $scope.usersFilter.status.toLowerCase() : ''
		$scope.usersFilter.email = $scope.usersFilter.email ? $scope.usersFilter.email.toLowerCase() : ''
		$scope.usersFilter.lastname = $scope.usersFilter.lastname ? $scope.usersFilter.lastname.toLowerCase() : ''

		usersList.forEach(function(user){
			var test = user.name.toLowerCase().includes($scope.usersFilter.name)
						&& user.lastname.toLowerCase().includes($scope.usersFilter.lastname)
						&& user.status.toLowerCase().includes($scope.usersFilter.status)
						&& user.email.toLowerCase().includes($scope.usersFilter.email)
			if(test){
				list.push(user)
			}
		})
		return $q.resolve(list)
	}

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

    var listUsers = function(){
    	//TODO: API
    	var list = [
    		{
    			"name":"Maria",
    			"lastname":"Silva",
    			"status":"Ativo",
    			"email":"maria.silva@gmail.com",
    			"id":"1"
    		},
    		{
    			"name":"João",
    			"lastname":"Marques",
    			"status":"Ativo",
    			"email":"joao.marques@gmail.com",
    			"id":"2"
    		},
    		{
    			"name":"José",
    			"lastname":"Silveira",
    			"status":"Inativo",
    			"email":"jose.silveira@gmail.com",
    			"id":"3"
    		}
    	]
    	return $q.resolve(list);
    }
      
    return {
        saveNewUser: function(newUserForm) {
        	return saveNewUser(newUserForm);
        },
        listUsers: function(){
        	return listUsers();
        }

    }
}]);
