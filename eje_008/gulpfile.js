/*
* Dependencias generales
*/
var gulp       =  require('gulp'),
    cssmin     =  require('gulp-cssmin'),
    uglify     =  require('gulp-uglify'),
    concat     =  require('gulp-concat'),
	concatCss  =  require('gulp-concat-css'),
	rename     =  require('gulp-rename');
	
// Inicializador de tareas 

gulp.task('cssconcat',function(){
 return gulp.src('src/css/**/*.css')
    .pipe(concatCss("theme.css"))
	.pipe(cssmin())
	.pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jsconcat',function(){
  return gulp.src('src/js/**/*.js')
    .pipe(concat('operation.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

// iniciamos nuestro gestor automatico de tareas multiples.
gulp.task('default',['cssconcat','jsconcat']);