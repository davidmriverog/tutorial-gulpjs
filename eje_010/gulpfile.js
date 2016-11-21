
var gulp = require('gulp'),
ngAnnotate = require('gulp-ng-annotate'),
uglify     =  require('gulp-uglify'),
concat     =  require('gulp-concat');
 
gulp.task('default', function () {
    return gulp.src(["src/js/app.js","src/js/controllers/**/*.js"])
        .pipe(concat('example.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});