'use strict';

angular.module('uniTunesApp.MediaCatalog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/media_catalog', {
    templateUrl: 'media-catalog/media-catalog.html',
    controller: 'MediaCatalogCtrl',
    authenticated: true
  });
}])

.controller('MediaCatalogCtrl', function($scope) {
  $scope.catalogMedia = [
    {
      title: 'Alice in Wonderland',
      type: 'book',
      thumbnailURL: '',
      categories: '#fantasy #novel #classic'
    },
    {
      title: 'Lesson 1',
      type: 'video',
      thumbnailURL: '',
      categories: '#maths'
    },
    {
      title: 'Lesson 2',
      type: 'video',
      thumbnailURL: '',
      categories: '#maths'
    },
    {
      title: 'Lesson 3',
      type: 'video',
      thumbnailURL: '',
      categories: '#maths'
    },
  ];
});
