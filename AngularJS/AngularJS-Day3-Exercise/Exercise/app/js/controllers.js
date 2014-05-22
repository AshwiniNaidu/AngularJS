'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('inboxController', ['$scope', '$rootScope',  function($scope, $rootScope) {
  		$scope.messages = [
  			{
  				date: '12/05/2014',
  				sender: 'krishnamurthy.svg@gmail.com',
  				subject: 'AngularJS Training Details',
  				body: "Hi, How are you doing"

  			},
  			{
  				date: '14/06/2014',
  				sender: 'eldin.dalavai@gmail.com',
  				subject: 'Prayer Meet in St.Xavier\'s Church',
  				body: "Hey! you There"

  			},
  			{
  				date: '18/08/2013',
  				sender: 'soujanya.ch@gmail.com',
  				subject: 'Shopping this weekend',
  				body: "Hello! Good Morning"

  			},
  			{
  				date: '10/03/2012',
  				sender: 'geeta.sen@gmail.com',
  				subject: 'Weekend trip details',
  				body: "Good Evening! Hope you are in cheers"

  			},
  			{
  				date: '09/04/2014',
  				sender: 'pavan.chiravuri@gmail.com',
  				subject: 'Very Confidential: Do not show to anyone',
  				body: "April Fool! Got you again!"
  			}
		];

		$scope.openEmail = function(msg) {
			$rootScope.email = msg;
		};

		

  }])
  .controller('emailController', ['$scope', '$rootScope', function($scope, $rootScope) {
  		//	$scope.email = 
  			
  }]);
