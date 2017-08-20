'use strict';

// Create the Home module unit test suite
describe('Testing Home Controller', function () {
    // Define global variables
    let _scope, HomeController;

    //function before each test
    beforeEach(function () {
        // Load the 'bookshop' module
        module('yoti');

        // Add a matcher
        jasmine.addMatchers({
            toEqualData: function (util, customEqualityTesters) {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: angular.equals(actual, expected)
                        };
                    }
                };
            }
        });

        inject(function ($rootScope, $controller) {
            //mock scope object
            _scope = $rootScope.$new();

            // Create a new mock book controller
            HomeController = $controller('HomeController', {
                $scope: _scope
            });
        });
    });

    // Test the 'getProfile' method
    it('Should have a getProfile method that uses $http to get a YOTI profile', inject(function ($http) {
        // Use the 'inject' method to inject services
        inject(function ($httpBackend) {
            // Create a sample books
            let sampleProfile = {profile:{givenNames: 'John',
                familyName: 'Doe',
                selfie: 'Foo Bar.jpg'}
};

            // Create a sample books list

            // Define a request assertion
            $httpBackend.expectGET('/api/profile').respond(sampleProfile);

            // Call the controller's 'getProfile' method
            _scope.getProfile();

            // Flush the mock HTTP results
            $httpBackend.flush();

            // Test the results
            expect(_scope.profile).toEqualData(sampleProfile.profile);
        });
    }));
    });