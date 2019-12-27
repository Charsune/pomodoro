module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          quiet: true,
          sourcemap: 'none',
          cacheLocation: 'src/sass/'
        },
        files: {
          'public/css/style.css': 'src/sass/style.scss'
        }
      }
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        tasks: [],
        options: {
          livereload: 33334
        }
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: 33334,
        },
      },
      html: {
        files: ['*.html'],
        tasks: [],
        options: {
          livereload: 33334,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass'); 
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
}
