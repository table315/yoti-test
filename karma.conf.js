module.exports = function(config) {
     config.set({
       frameworks: ['jasmine'],
       files: [
           'public/lib/angular/angular.js',
           'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
           'public/lib/angular-resource/angular-resource.js',
           'public/lib/angular-ui-router/release/angular-ui-router.js',
           'public/lib/angular-mocks/angular-mocks.js',
           'public/application.js',
           'public/*[!lib]*/*.js',
           'public/*[!lib]*/*[!tests]*/*.js',
           'public/*[!lib]*/tests/unit/*.js'
        ],
        reporters: ['mocha'],
        browsers: ['Chrome'],
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        captureTimeout: 60000,
        singleRun: true
}); };