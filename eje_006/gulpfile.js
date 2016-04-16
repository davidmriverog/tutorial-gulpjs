/*
* Dependencias generales
*/
var gulp     =  require('gulp'),
    uglify   =  require('gulp-uglify'),
    concat   =  require('gulp-concat');
	
// Inicializador de tareas 
gulp.task('jsconcat',function(){
  return gulp.src('src/js/**/*.js')
    .pipe(concat('operation.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});