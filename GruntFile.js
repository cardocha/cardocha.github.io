/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';


module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            css: {
                src: [
                    'assets/css/lib/semanticui/semantic.min.css',
                    'assets/css/home/home.css',
                ],
                dest: 'assets/css/estilo.css'
            },

            js: {
                src: [
                    'assets/js/lib/jquery/jquery-3.3.1.min.js',
                    'assets/js/lib/semanticui/semantic.min.js',
                    'assets/js/lib/sprintf/sprintf.min.js',
                    'assets/js/home/home.js'
                ],
                dest: 'assets/js/libs.js'
            }
        },
        uglify: {
            js: {
                src: 'assets/js/libs.js',
                dest: 'assets/js/libs.min.js'
            }
        },
        cssmin: {
            css: {
                src: 'assets/css/estilo.css',
                dest: 'assets/css/estilo.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
};