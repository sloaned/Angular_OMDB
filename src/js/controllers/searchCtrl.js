'use strict';

angular.module('routingLecture').controller('searchCtrl', ['$location', '$scope', 'searchFactory', 'sharedProperties',
    function($location, $scope, searchFactory, sharedProperties){
		$scope.resultsFound = false;
		$scope.makeSearch = function(){
			searchFactory.searchCall($scope.search).then(
				function(success){
					$scope.resultsFound = true;
					$scope.results = success.data.Search;
				},
				function(error){
					$scope.resultsFound = false;
					$scope.results = error;
				}
			);
		};
		$scope.clickMovie = function(id){
			sharedProperties.setMovieId(id);
			console.log("movie ID = " + sharedProperties.getMovieId());
			//$state.go('view');
			$location.path('view');
		};
	}]);