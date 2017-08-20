'use strict';

// Set the main application name
let appModuleName = 'yoti';

// Create the main application
let mainApplicationModule = angular.module(appModuleName, ['ngResource', 'ui.router', 'ui.bootstrap', 'home']);

// Configure the hashbang URLs using the $locationProvider services 
mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

if (window.location.hash === '#_=_') window.location.hash = '#!'

//bootstrap the AngularJS application
angular.element(document).ready(function() {
	angular.bootstrap(document, [appModuleName]);
});