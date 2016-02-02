var os = require('os');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-selenium-server');
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        'start-selenium-server': {
            dev: {
                options: {
                    autostop: false,
                    downloadUrl: 'https://selenium-release.storage.googleapis.com/2.46/selenium-server-standalone-2.46.0.jar',
                    downloadLocation: os.tmpdir(),
                    serverOptions: {},
                    systemProperties: {}
                 }

            }
        },
        'stop-selenium-server': {
              dev: {}
        },
        connect: {
            options: {
                port: 8585,
                base: './'
            },
            main: {}
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

    grunt.registerTask('test:local', ['start-selenium-server', 'connect', 'webdriver:local', 'stop-selenium-server']);
    grunt.registerTask('test:saucelabs', ['connect', 'webdriver:saucelabs']);
    grunt.registerTask('default', ['test:local']);
};
