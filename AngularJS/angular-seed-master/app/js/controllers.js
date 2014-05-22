'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('hotelsController', ['$scope', 'hotelsDataProvider', '$http', function($scope, hotelsDataProvider, $http) {
  $scope.test="List of Hotels";
  $scope.showHotels = true;

  hotelsDataProvider.getHotels().then(function(data) {
    $scope.hotels = data;
  }); 

  $scope.upVote = function (hotel) {
    hotel.rating = hotel.rating + 1;
  };

  $scope.downVote = function (hotel) {
    hotel.rating = hotel.rating - 1;
  };

}])
.controller('hotelDetailsController', ['$scope', 'hotelsDataProvider', '$route', '$routeParams', '$http', function($scope, hotelsDataProvider, $route, $routeParams, $http) {
  var selected = $routeParams.key;
  hotelsDataProvider.getHotelDetails(selected).then(function(data) {
    //console.log(data);
    $scope.hotelDetails = data;

  });

  $scope.saveComments = function (comments) {
    //alert("Form is valid  " + hotelForm.$valid);
      if(comments) {
        $http.post("https://shining-fire-5533.firebaseio.com/hotelsList/" + selected + '.json', comments);
        alert("Saved");
      }      
      }
}])
.controller('newHotelController',['$scope', 'newHotelsProvider', '$http', function($scope, newHotelsProvider, $http) {
  $scope.showData = function (hotel,hotelForm) {
    //alert("Form is valid  " + hotelForm.$valid);
      //console.log(hotel);
      if(hotelForm.$valid) {
        $http.post("https://shining-fire-5533.firebaseio.com/hotelsList.json", hotel);
        alert("Saved");
      }

        newHotelsProvider.getNewHotelDetails().then(function(data) {
          console.log(data);
         $scope.hotels = data;
  }); 


  }
}]);
