module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Load configuration
        pkg: grunt.file.readJSON('package.json'),

        // Compile SASS files
        sass: {
            normal: {
                options: {
                    style: "expanded",
                    compass: true
                },
                files: {
                    'css/bootstrap-buttons.css' : 'sass/bootstrap-buttons.scss'
                }
            },
            minified: {
                options: {
                    style: "compressed",
                    compass: true
                },
                files: {
                    'css/bootstrap-buttons.min.css' : 'sass/bootstrap-buttons.scss'
                }
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Default task.
    grunt.registerTask('default', ['sass']);

};