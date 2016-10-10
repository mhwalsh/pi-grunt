module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        //for angular
        // options: {
        //   mangle: false
        // },
        files: {
          //dest
          'public/scripts/client.min.js': ['client/*.js']
        }
      }
    },
    watch: {
      files: ['client/*.js'],
      tasks: ['uglify']
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'node_modules', src: ['angular/**', 'bootstrap/**'], dest: 'public/vendor'}
        ]
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'routes/*.js', 'client/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint','watch']);

};
