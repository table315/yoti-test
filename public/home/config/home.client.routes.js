'use strict';

angular.module('home').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.
    state('home',{
        url:'/',
        templateUrl:'/home/views/home.client.view.html'

    }).
    state('profile',{
        url:'/profile',
        templateUrl:'/home/views/profile.client.view.html'

    });
}]);