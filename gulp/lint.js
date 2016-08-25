'use strict';

var path = require('path');
var jshint = require('gulp-jshint');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var scssLint = require('gulp-scss-lint');
var runSequence = require('run-sequence');
var $if = require('gulp-if');
var browserSync = require('browser-sync');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  gulp.task('lint', function(cb) {
    runSequence(
      'js:lint',
      'js:lint:google',
      'sass:lint',
      cb
    );
  });

  // Js Linter
  gulp.task('js:lint', function() {
    return gulp.src([
      path.join(dirs.source, dirs.scripts, '**/.js'),
      path.join(dirs.source, dirs.modules, '**/.js')
     ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe($if(!browserSync.active, eslint.failAfterError()));
  });

  // Js Linter Google Style
  gulp.task('js:lint:google', function() {
    return gulp.src([
      path.join(dirs.source, dirs.scripts, '**/*.js'),
      path.join(dirs.source, dirs.modules, '**/*.js')
    ])
    .pipe(jscs({ fix: true }))
    .pipe(jscs.reporter())
    .pipe($if(!browserSync.active, jscs.reporter('fail')));
  });

  // Sass Linter
  gulp.task('sass:lint', function() {
    return gulp.src([
      path.join(dirs.source, dirs.styles, '**/*.scss'),
      path.join(dirs.source, dirs.modules, '**/*.scss')
    ])
    .pipe(scssLint({'config': '.scsslintrc.yml'}));
  });

};
