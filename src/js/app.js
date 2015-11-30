'use strict';

angular.module('routingLecture', ['ui.router'])
	.service('sharedProperties', function(){
		var movieId = "";
		
		return{
			getMovieId: function(){
				return movieId;
			},
			setMovieId: function(id){
				movieId = id;
			}
		};
	});