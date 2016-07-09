const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('cleanServer', function(){
  return del([
    'dist/app/server/**/*',
    // we don't want to clean this file though so we negate the pattern
   '!dist/app/server/server.js'
  ]);
});

gulp.task('compile', function () {
    gulp.src('app/server/**.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/app/server'));

    gulp.src('app/components/**/**.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/app/components'));
});



gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('app/server/views/*')
  .pipe(gulp.dest('dist/app/server/views'));
});

gulp.task('watchForBabel', function() {
  gulp.watch(['app/server/**','app/components/**'], ['copyHtml','compile']);
});
