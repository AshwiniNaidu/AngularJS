'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hotels', {templateUrl: 'partials/hotels.html', controller: 'hotelsController'});
  $routeProvider.when('/newHotel', {templateUrl: 'partials/newHotel.html', controller: 'newHotelController'});
  $routeProvider.when('/details/:key', {templateUrl: 'partials/details.html', controller: 'hotelDetailsController'});
   $routeProvider.when('/customDirective', {templateUrl: 'partials/customDirective.html', controller: 'hotelDetailsController'});
  $routeProvider.otherwise({redirectTo: '/customDirective'});
}]);
