module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        connect: {
            local: {
                options: {
                    port: 8080,
                    base: './'
                }
            },
            travis_ci: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        webdriver: {
            local: {
                configFile: './wdio-local.conf.js'
            },
            saucelabs: {
                configFile: './wdio-saucelabs.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-webdriver');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('test:local', ['connect:local', 'webdriver:local']);
    grunt.registerTask('test:saucelabs', ['connect:travis_ci', 'webdriver:saucelabs']);
    grunt.registerTask('default', ['test:local']);
};
