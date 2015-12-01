'use strict';

angular.module('routingLecture').controller('listCtrl', ['$scope', 'sharedProperties',
     function($scope, sharedProperties){
		$scope.deleteMovie = function(movie){
			sharedProperties.removeFromMovieList(movie);
		};
		$scope.getList = function(){
			return sharedProperties.getMovieList();
		};
		$scope.getDirectors = function(movie){
			return movie.Director.split(', ');
		}
}]);