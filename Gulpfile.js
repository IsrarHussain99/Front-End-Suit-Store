var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', gulp.series(["default"]function() {

  return gulp.src('assets/sass/**/*.scss')

  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.LogError ))
  .pipe(gulp.dest('./'))
  });


gulp.task('default', ['sass']);
