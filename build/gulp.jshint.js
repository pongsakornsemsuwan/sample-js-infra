var gulp   = require('gulp'),
    jshint = require('gulp-jshint');

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watchForHint', function() {
  gulp.watch('app/**/*.js', ['jshint']);
});
