'use strict';

angular.module('uniTunesApp.Login', ['ngRoute', 'pathgather.popeye'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  })
}])

.controller('LoginCtrl', function($scope, $q, $location, $routeParams, Popeye) {
    $scope.loginForm = {}

    $scope.doLogin = function(){
        console.log(JSON.stringify($scope.loginForm))
    }
})

.factory('AuthorizationService', ['$http', '$q', function($http, $q) {
   
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
    		},
    		{
    			"name":"Tiago",
    			"lastname":"Gomes",
    			"status":"Inativo",
    			"email":"tiago.gomes@gmail.com",
    			"id":"4"
    		},
    		{
    			"name":"Silvia",
    			"lastname":"Lopes",
    			"status":"Ativo",
    			"email":"silvia.lopes@gmail.com",
    			"id":"5"
    		}
    	]
    	return $q.resolve(list);
    }

    var getUser = function(id){
    	//TODO API
    	var user = {
    		"id":"1",
			"name":"Maria",
			"lastname":"Silva",
			"email":"maria.silva@gmail.com",
			"credit":"39",
			"status":"Ativo",
			"products": [ {
				"title":"Padrões de Projeto",
				"price":"20",
				"category":"Livro",
				"soldAmount":"5"
			},
			{
				"title":"Bad smells",
				"price":"5",
				"category":"Vídeo",
				"soldAmount":"18"
			}]
		}
		return $q.resolve(user)
    }
      
    return {
        saveNewUser: function(newUserForm) {
        	return saveNewUser(newUserForm);
        },
        listUsers: function(){
        	return listUsers();
        },
        getUser: function(id){
        	return getUser(id)
        }

    }
}]);
