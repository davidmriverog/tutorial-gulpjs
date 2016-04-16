/*
* Dependencias generales
*/
var gulp     =  require('gulp'),
    stylus   =  require('gulp-stylus');

gulp.task('stylusToCss',function(){
  return gulp.src('src/css/main.styl')
    .pipe(
      stylus({
        compress: true
      })
    )
    .pipe(gulp.dest('dist/css'));
});