var jsSearchApp = angular.module('jsSearchApp', []);
 
jsSearchApp.controller('QueryFeedbackController', function ($scope) {
    $scope.terms = {};

    $scope.parse = function(query) {
	$scope.terms = [ "parse!", query ];
    }
});
