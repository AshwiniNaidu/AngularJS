'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1').
factory('hotelsDataProvider',['$http','$q', function($http, $q) {

	var hotelsData = {

		getHotels: function() {
			var deferred = $q.defer();
			$http({method: 'GET', url: 'https://shining-fire-5533.firebaseio.com/hotelsList.json'}).
			success(function(data) {
				deferred.resolve(data);
			}).
			error(function(data) {
				deferred.reject();
			});

			return deferred.promise;
		},


		getHotelDetails: function(key) {
			var deferred = $q.defer();
			$http({method: 'GET', url: 'https://shining-fire-5533.firebaseio.com/hotelsList/' + key + '.json'}).
			success(function(data) {
				deferred.resolve(data);
			}).
			error(function(data) {
				deferred.reject();
			});

			return deferred.promise;
		}

	}
	return hotelsData;
}]);

