'use strict';

angular.module('routingLecture').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/main');

	$stateProvider.state('search', {
		url: '/search',
		templateUrl: 'templates/search.tpl.html',
		controller: 'searchCtrl'
	})
	.state('main', {
		url: '/main',
		templateUrl: 'templates/main.tpl.html',
		controller: 'mainCtrl'
	})
	.state('list', {
		url: '/list',
		templateUrl: 'templates/list.tpl.html',
		controller: 'listCtrl'
	})
	.state('view', {
		url: '/view',
		templateUrl: 'templates/view.tpl.html',
		controller: 'viewCtrl'
	});

}]);