var App = angular.module('App', [
	'ngRoute',
	'controllers',
	'services'
]);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	})
	
	.when('/jogadores/list/:msg', {
		templateUrl: 'views/jogadores/list.html',
		controller: 'ListCtrl'
	})

	.when('/jogadores/create', {
		templateUrl: 'views/jogadores/create.html',
		controller: 'CreateCtrl'
	})

	.when('/jogadores/edit/:id', {
		templateUrl: 'views/jogadores/edit.html',
		controller: 'EditCtrl'
	})
});

App.value('API', 'http://localhost:3000/');