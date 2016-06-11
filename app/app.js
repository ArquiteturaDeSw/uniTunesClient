'use strict';

// Declare app level module which depends on views, and components
angular.module('uniTunesApp', [
  'ngRoute',
  'pathgather.popeye',
  'uniTunesApp.MediaCatalog',
  'uniTunesApp.User',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/media_catalog'});
}]);
