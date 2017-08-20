"use strict";

// Define the Grunt configuration method
module.exports = function(grunt) {
	// Initialize Grunt configuraiton
	grunt.initConfig({
		// Configure the grunt-env task
		env: {
			test: {
				NODE_ENV: 'test'
			},
			dev: {
				NODE_ENV: 'development'
			}
		},
		// Configure the grunt-nodemon task
		nodemon: {
			dev: {
				script: 'index.js',
				options: {
					ext: 'js,html',
					watch: ['index.js', 'config/**/*.js', 'app/**/*.js']
				}
			},
			debug: {
				script: 'index.js',
				options: {
					nodeArgs: ['--debug'],
					ext: 'js,html',
					watch: ['index.js', 'config/**/*.js', 'app/**/*.js']
				}
			}
		},
		// Configure the grunt-mocha-test task
		mochaTest: {
			src: 'app/tests/**/*.js',
			options: {
				reporter: 'spec'
			}
		},
		// Configure the grunt-karma task
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		// Configure the grunt-contrib-csslint task
		csslint: {
			all: {
				src: 'public/modules/**/*.css'
			}
		},
		// Configure the grunt-contrib-watch task
		watch: {
			js: {
				files: ['index.js', 'config/**/*.js', 'app/**/*.js', 'public/js/*.js', 'public/modules/**/*.js'],
				tasks: ['eslint']
			},
			css: {
				files: 'public/modules/**/*.css',
				tasks: ['csslint']
			}
		},
		// Configure the grunt-concurrent task
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			},
			debug: {
				tasks: ['nodemon:debug', 'watch', 'node-inspector'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});

	// Load the external Grunt tasks
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');

	// Create the 'default' Grunt task
	grunt.registerTask('default', ['env:dev', 'lint', 'concurrent:dev']);

	// Create the 'debug' Grunt task
	grunt.registerTask('debug', ['env:dev', 'lint', 'concurrent:debug']);

	// Create the 'test' Grunt task
	grunt.registerTask('test', ['env:test', 'mochaTest', 'karma']);

	// Create the 'lint' Grunt task
	grunt.registerTask('lint', ['csslint']);
};