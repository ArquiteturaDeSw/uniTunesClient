'use strict';

// Declare app level module which depends on views, and components
angular.module('uniTunesApp', [
  'ngRoute',
  'pathgather.popeye',
  'uniTunesApp.MediaCatalog',
  'uniTunesApp.User',
  'uniTunesApp.Login',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/media_catalog'});
}])

.filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});
