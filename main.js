var module = angular.module('AngularIntro', []);
 
  //Adição do Controller ao módulo
  module.controller('MainCtrl', function($scope, $http){
    $scope.ligar = function() {
		$http.get('http://localhost:3000/ligar').
	    success(function(data) {
	        $scope.result = data;
	    });
    };

    $scope.desligar = function() {
		$http.get('http://localhost:3000/desligar').
	    success(function(data) {
	        $scope.result = data;
	    });
    };
  });