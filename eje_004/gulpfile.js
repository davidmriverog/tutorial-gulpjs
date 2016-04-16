/*
* Dependencias generales
*/
var gulp     =  require('gulp'),
    jade     =  require('gulp-jade');

gulp.task('JadetoHtml',function(){
  return gulp.src('src/templates/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('app/views'));
});