
module.exports = function(grunt) {


grunt.initConfig({
  concat: {
    js: {
      src: ['js/main.js'],
      dest: 'build/js/main_build.js',
    },
    css: {
      src: ['css/main.css', 'css/style.css'],
      dest: 'build/css/main.css',
    },
  },
  watch: {
  js: {
    files: ['js/**/*.js'],
    tasks: ['concat:js'],
  },
  css: {
    files: ['css/**/*.css'],
    tasks: ['concat:css'],
  },
},

});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');

};
