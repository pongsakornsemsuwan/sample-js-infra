const PATH = require('path');

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./build', {recurse: false});

//gulp.task('default', ['build:watch:scss', 'build:watch:app', 'lint:watch:app', 'server']);
//gulp.task('default', ['build:watch:scss', 'build:watch:app', 'lint:watch:app']);

//gulp.task('default', ['watchForHint', 'copyHtml', 'compile', 'build:watch:app', 'watchForBabel']);
gulp.task('default', ['copyHtml', 'compile', 'build:watch:app', 'watchForBabel']);

gulp.task('build', ['copyHtml', 'compile', 'build:app']);
