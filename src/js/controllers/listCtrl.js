'use strict';

angular.module('routingLecture').controller('listCtrl', ['$scope', 'sharedProperties', '$location',
     function($scope, sharedProperties, $location){
		//sharedProperties.setMovieId("");
		$scope.deleteMovie = function(movie){
			sharedProperties.removeFromMovieList(movie);
		};
		$scope.getList = function(){
			return sharedProperties.getMovieList();
		};
		$scope.clickMovie = function(id){
			sharedProperties.setMovieId(id);
			$location.path('view');
		};
}]);