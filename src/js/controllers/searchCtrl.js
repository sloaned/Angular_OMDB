'use strict';

angular.module('routingLecture').controller('searchCtrl', ['$location', '$scope', 'searchFactory', 'sharedProperties',
    function($location, $scope, searchFactory, sharedProperties){
		//sharedProperties.setMovieId("");
		$scope.resultsFound = false;
		$scope.checkForResults = function(){
			$scope.results = sharedProperties.getSearchResults();
			if($scope.results.length != 0)
			{
				$scope.resultsFound = true;
			}
				
		}
		$scope.makeSearch = function(){
			searchFactory.searchCall($scope.search).then(
				function(success){
					sharedProperties.setSearch($scope.search);
					$scope.resultsFound = true;
					$scope.results = success.data.Search;
					sharedProperties.setSearchResults($scope.results);
				},
				function(error){
					$scope.resultsFound = false;
					$scope.results = error;
				}
			);
		};
		$scope.clickMovie = function(id){
			sharedProperties.setMovieId(id);
			$location.path('view');
		};
	}]);