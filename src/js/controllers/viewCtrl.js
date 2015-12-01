'use strict';

angular.module('routingLecture').controller('viewCtrl', ['$scope', 'viewFactory', 'sharedProperties',
     function($scope, viewFactory, sharedProperties){
		$scope.getMovie = function(){
			$scope.movieId = sharedProperties.getMovieId();
			viewFactory.searchCall($scope.movieId).then(
				function(success){
					$scope.resultFound = true;
					$scope.result = success.data;
					$scope.writers = success.data.Writer.split(', ');
					$scope.directors = success.data.Director.split(', ');
					$scope.genres = success.data.Genre.split(', ');
					$scope.actors = success.data.Actors.split(', ');
					$scope.langs = success.data.Language.split(', ');
					$scope.countries = success.data.Country.split(', ');
					console.log($scope.result);
					console.log($scope.langs);
				},
				function(error){
					$scope.resultFound = false;
					$scope.result = error;
				}
			);
		};
}]);