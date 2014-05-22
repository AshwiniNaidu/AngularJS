'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('sampleDir', ['$compile', function($compile) {
  	return {
  		restrict: 'AEC',
  		template: "<input type='text' ng-model='sampleInfo' /> <span>{{sampleInfo}}</span>",
  		scope: {

  		}
  		//link: function(scope, element, attrs, controller) {
  		//	var markup = "<input type='text' ng-model='sampleInfo' /> <span>{{sampleInfo}}</span>";
  		//	 var compile = $compile(markup)(scope);
  		//	 angular.element(element).append(compile);
  		//}
  	}

  }]).
  directive('hotelSummary', function() {
  		return {
  			restrict: 'E',
  			templateUrl: "templates/hotelSummary.html",
  			scope: {
  				targetHotel: "=hotel"
  			}
  		}

  }).
  directive('rating', function() {

  	return {
  		restrict: 'E',
  		templateUrl: "templates/rating.html",
  		scope: {
  			score: "=",
  			up: "&",
  			down: "&"
  		}

  	}
  });


