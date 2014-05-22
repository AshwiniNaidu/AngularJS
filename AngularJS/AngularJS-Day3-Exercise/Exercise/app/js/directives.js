'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('inbox', function() {
  	return {
  		restrict: 'AE',
  		templateUrl: 'template/inbox.html',
  		scope: {
  			message: "="
  		}
  	}
  }).
  directive('email', function() {
  	return {
  		restrict: 'AE',
  		templateUrl: 'template/email.html'
  	}
  });
