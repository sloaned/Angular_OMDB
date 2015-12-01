'use strict';

angular.module('routingLecture', ['ui.router'])
	.service('sharedProperties', function(){
		var movieId = "";
		var movieList = [];
		var search = "";
		var searchResults = [];
		return{
			getSearchResults: function(){
				return searchResults;
			},
			setSearchResults: function(param){
				searchResults = param;
			},
			getSearch: function(){
				return search;
			},
			setSearch: function(param){
				search = param;
			},
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
				var index = -1;
				for(var i = 0; i < movieList.length; i++)
				{
					if(movieList[i].imdbID === movie.imdbID)
					{
						index = i;
					}
				}
				if(index > -1)
				{
					movieList.splice(index, 1);
				}
			},
			isMovieOnList: function(movie){
				for(var i = 0; i < movieList.length; i++)
				{
					if(movieList[i].imdbID === movie.imdbID)
					{
						return true;
					}
				}
				return false;
			}
			
		};
	});