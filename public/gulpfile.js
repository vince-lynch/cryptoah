var gulp        = require('gulp');
 
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');
var sass        = require('gulp-sass');
 

gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/sass'));
});

gulp.task('build', function () {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: './app/javascripts/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./build/'))
        .pipe(livereload());
});
 
gulp.task('watch', ['build'], function () {
    livereload.listen();
    gulp.watch('./app/javascripts/*.js', ['build']);
    gulp.watch('./app/sass/*.scss', ['sass']);
});



 
gulp.task('default', ['watch']);