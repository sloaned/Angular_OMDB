'use strict';

angular.module('routingLecture', ['ui.router'])
	.service('sharedProperties', function(){
		var movieId = "";
		var movieList = [];
		return{
			getMovieId: function(){
				return movieId;
			},
			setMovieId: function(id){
				movieId = id;
			},
			getMovieList: function(){
				return movieList;
			},
			addToMovieList: function(movie){
				movieList.push(movie);
			},
			removeFromMovieList: function(movie){
				var index = movieList.indexOf(movie);
				if(index > -1)
				{
					movieList.splice(index, 1);
				}
			}
		};
	});