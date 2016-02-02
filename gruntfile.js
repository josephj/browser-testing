module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        connect: {
            test: {
                options: {
                    port: 8989,
                    base: './'
                },
            }
        },
        webdriver: {
            test: {
                configFile: './wdio.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-webdriver');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect:test', 'webdriver:test']);
};
