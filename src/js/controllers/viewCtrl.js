'use strict';

angular.module('routingLecture').controller('viewCtrl', ['$scope', 'viewFactory', //'sharedProperties',
     function($scope, viewFactory){
		$scope.getMovie = function(){
			$scope.movieId = "tt4619840";
			//$scope.movieId = sharedProperties.getMovieId();
			console.log($scope.movieId);
			viewFactory.searchCall($scope.movieId).then(
				function(success){
					$scope.resultFound = true;
					$scope.result = success.data;
				},
				function(error){
					$scope.resultFound = false;
					$scope.result = error;
				}
			);
		};
}]);