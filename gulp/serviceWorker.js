'use strict';

var path = require('path');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  // Copy Service Workers file only to the root directory of the project.
  gulp.task('sw:copy', ['cache-polyfill:copy'], function() {

    return gulp.src([
      path.join(dirs.source, '**/sw.js'),
        '!' + path.join(dirs.source, '{**/*.ico'),
        '!' + path.join(dirs.source, '**/*.md'),
        '!' + path.join(dirs.source, '**/*.txt')
      ]
    )
    .pipe(plugins.rename(function(filepath) {
      // Remove 'source' directory as well as prefixed folder underscores
      // Ex: 'src/_scripts' --> '/'
      filepath.dirname = filepath.dirname.replace(dirs.source, '').replace('_scripts', '');
    }))
    .pipe(gulp.dest(dest));
  });

  // Copy Service Workers file only to the root directory of the project
  // from the node module serviceworker-cache-polyfill.
  gulp.task('cache-polyfill:copy', function() {

    return gulp.src([
      path.join(dirs.node_modules, 'serviceworker-cache-polyfill/index.js')
    ])
    .pipe(plugins.rename(function(filepath) {

      // Renames the index.js of the cache service worker script to
      // cache-polyfill.js
      filepath.basename = 'cache-polyfill';
    }))
    .pipe(gulp.dest(dest));
  });

};
