'use strict';

angular.module('routingLecture').controller('searchCtrl', ['$location', '$scope', 'searchFactory', 'sharedProperties', 'ngToast',
    function($location, $scope, searchFactory, sharedProperties, ngToast){
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
					if(success.data.Search === undefined)
					{
						ngToast.warning({
							  content: 'No movies found'
						});
					}
					else
					{
						sharedProperties.setSearch($scope.search);
						
						$scope.resultsFound = true;
						$scope.results = success.data.Search;
						for(var i = 0; i < $scope.results.length; i++)
						{
							if($scope.results[i].Poster.length < 5)
							{
								$scope.results[i].Poster = "http://www.balaniinfotech.com/wp-content/themes/balani/images/noimage.jpg";
							}
						}
						sharedProperties.setSearchResults($scope.results);
					}
					
				},
				function(error){
					$scope.resultsFound = false;
					$scope.results = error;
					ngToast.warning({
						  content: 'No movies found'
					});
				}
			);
		};
		$scope.clickMovie = function(id){
			sharedProperties.setMovieId(id);
			$location.path('view');
		};
	}]);