angular.module('routingLecture').factory('searchFactory', ['$http',
	function($http){
		 return {
			 searchCall: function(param){
				 return $http.get("http://www.omdbapi.com/?s=" + param);
			 }
		};
	}]);