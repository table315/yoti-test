'use strict';

angular.module('home').controller('HomeController', ['$scope', '$http','$location', function ($scope, $http,$location) {

    //load yoti button
    $scope.loadYoti = function (){
	    _ybg.config.service = 'https://code.yoti.com/app/';
	    _ybg.init();
    }

    //get profile
    $scope.getProfile = function () {
        // Grap the token query string.
        var token = $location.search();
        $http.get('/api/profile',{params:token})
            .then(function (response) {
                $scope.profile = response.data.profile;
            }, function (response) {
                console.log('No profile');
                $location.path('home');
            });
    }

}]);