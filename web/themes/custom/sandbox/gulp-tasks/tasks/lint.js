/**
 * @file
 * Task: Lint.
 */

module.exports = function lintTask(gulp, plugins, config) {
  gulp.task('lintSass', () =>
    gulp
      .src(config.sass.source)
      .pipe(plugins.gulpStylelint({
      reporters: [{ formatter: 'string', console: true }],
    })));

  gulp.task('lintJs', () =>
    gulp
      .src(config.js.source)
      .pipe(plugins.gulpEslint())
      .pipe(plugins.gulpEslint.format())
      .pipe(plugins.gulpEslint.failAfterError())
  );

  gulp.task('lint', gulp.series('lintSass', 'lintJs'));
};
