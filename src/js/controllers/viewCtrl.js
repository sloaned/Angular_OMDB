'use strict';

angular.module('routingLecture').controller('viewCtrl', ['$scope', 'viewFactory', 'sharedProperties', '$state',
     function($scope, viewFactory, sharedProperties, $state){
		$scope.onList = false;
		$scope.getMovie = function(){
			$scope.resultFound = false;
			$scope.movieId = sharedProperties.getMovieId();
			if($scope.movieId != "")
			{
				viewFactory.searchCall($scope.movieId).then(
						function(success){
							$scope.resultFound = true;
							$scope.result = success.data;
							$scope.writers = success.data.Writer.split(', ');
							$scope.directors = success.data.Director.split(', ');
							$scope.actors = success.data.Actors.split(', ');
							$scope.poster = success.data.Poster;
							if(success.data.Poster.length < 5)
							{
								$scope.poster = "http://www.balaniinfotech.com/wp-content/themes/balani/images/noimage.jpg";
							}
							$scope.checkMovie($scope.result);
						},
						function(error){
							$scope.resultFound = false;
							$scope.result = error;
						}
					);
				//sharedProperties.setMovieId("");
			}
		};
		$scope.reviseList = function(movie){
			if($scope.onList)
			{
				sharedProperties.removeFromMovieList(movie);
			}
			else
			{
				sharedProperties.addToMovieList(movie);
			}
			$scope.onList = !$scope.onList;
			
		}
		$scope.addMovieToList = function(movie){
			sharedProperties.addToMovieList(movie);
			//$location.path('view');
			$state.go($state.current, {}, {reload: true});
			console.log(sharedProperties.getMovieId());
		};
		$scope.deleteMovie = function(movie){
			sharedProperties.removeFromMovieList(movie);
			//$location.path('view');
			$state.go($state.current, {}, {reload: true});
			console.log(sharedProperties.getMovieId());
		};
		$scope.checkMovie = function(movie){
			if(sharedProperties.isMovieOnList(movie))
			{
				$scope.onList = true;
			}
			else
			{
				$scope.onList = false;
			}
		};
}]);