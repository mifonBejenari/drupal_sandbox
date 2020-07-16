/**
 * @file
 * Task: Prettier.
 */

module.exports = function prettierTask(gulp, plugins, config) {
  const options = { singleQuote: true, trailingComma: 'es5' };

  gulp.task('prettier',
    gulp.series(
      () =>
        gulp
          .src(config.sass.source)
          .pipe(plugins.prettier(options))
          .pipe(gulp.dest(file => file.base)),
      () =>
        gulp
          .src(config.js.source)
          .pipe(plugins.prettier(options))
          .pipe(gulp.dest(file => file.base)),
    )
  )

  gulp.task('prettier:check',
    gulp.series(
      () =>
        gulp
          .src(config.sass.source)
          .pipe(plugins.prettier.check(options)),
      () =>
        gulp
          .src(config.js.source)
          .pipe(plugins.prettier.check(options))
    )
  )
};
