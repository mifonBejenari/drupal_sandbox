/**
 * @file
 * Task: Sass.
 */

module.exports = function stylesTask(gulp, plugins, config) {
  gulp.task('styles', () =>
    gulp
      .src(config.sass.source)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass(config.sass.options).on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer(plugins.browserslist))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(config.sass.destination)));
};
