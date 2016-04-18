/*
* Dependencias generales
*/
var gulp       =  require('gulp'),
    plumber    =  require('gulp-plumber'),
    cssmin     =  require('gulp-cssmin'),
    uglify     =  require('gulp-uglify'),
    concat     =  require('gulp-concat'),
    concatCss  =  require('gulp-concat-css'),
    rename     =  require('gulp-rename');
	
// Inicializador de tareas

gulp.task('cssconcat',function(){
  gulp.src('src/css/**/*.css')
    .pipe(plumber())
    .pipe(concatCss("theme.css"))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jsconcat',function(){
  gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('operation.js'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/js'));
});

// esta tarea permite mirar los cambios en el fichero src/ de desarrollo
// para luego desplegarlos en produccion cada vez que guardes un cambios
// de manera automatizada. xD....
gulp.task('watch',function(){
  // automatizacion de los css
  gulp.watch('src/css/**/*.css',['cssconcat']);
  // automatizacion de los js
  gulp.watch('src/js/**/*.js',['jsconcat']);
});

// iniciamos nuestro gestor automatico de tareas multiples.
gulp.task('default',['cssconcat','jsconcat']);
