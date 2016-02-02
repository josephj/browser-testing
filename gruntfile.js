module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        connect: {
            local: {
                options: {
                    port: 80,
                    base: './'
                },
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

    grunt.registerTask('test:local', ['connect', 'webdriver:local']);
    grunt.registerTask('test:saucelabs', ['connect', 'webdriver:saucelabs']);
    grunt.registerTask('default', ['test:local']);
};
