module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      test : {
        src : 'scripts/*.js',
        options : {
          specs : 'test/*.spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', 'jasmine');
};

