angular.module('routingLecture').factory('viewFactory', ['$http',
	function($http){
		 return {
			 searchCall: function(id){
				 return $http.get("http://www.omdbapi.com/?i=" + id + "&plot=short&r=json");
			 }
		};
	}]);