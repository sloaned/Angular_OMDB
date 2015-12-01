'use strict';

angular.module('routingLecture').controller('viewCtrl', ['$scope', 'viewFactory', 'sharedProperties', '$location',
     function($scope, viewFactory, sharedProperties, $location){
		$scope.getMovie = function(){
			$scope.resultFound = false;
			$scope.movieId = sharedProperties.getMovieId();
			viewFactory.searchCall($scope.movieId).then(
				function(success){
					$scope.resultFound = true;
					$scope.result = success.data;
					$scope.writers = success.data.Writer.split(', ');
					$scope.directors = success.data.Director.split(', ');
					$scope.actors = success.data.Actors.split(', ');
					console.log($scope.result);
					console.log($scope.langs);
				},
				function(error){
					$scope.resultFound = false;
					$scope.result = error;
				}
			);
		};
		$scope.addMovieToList = function(movie){
			sharedProperties.addToMovieList(movie);
			$location.path('list');
		};
		$scope.deleteMovie = function(movie){
			sharedProperties.removeFromMovieList(movie);
		};
}]);