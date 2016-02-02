module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
         sauce_connect: {
            options: {
                username: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_ACCESS_KEY,
                verbose: true
            },
            server: {}
        },
        connect: {
            options: {
                port: 8585,
                base: './'
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
    grunt.loadNpmTasks('grunt-sauce-connect-launcher');

    grunt.registerTask('test:local', ['sauce_connect', 'connect', 'webdriver:local', 'sauce-connect-close']);
    grunt.registerTask('test:saucelabs', ['connect', 'webdriver:saucelabs']);
    grunt.registerTask('default', ['test:local']);
};
