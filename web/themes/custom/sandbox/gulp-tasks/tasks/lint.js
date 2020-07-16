/**
 * @file
 * Task: Lint.
 */

module.exports = function lintTask(gulp, plugins, config) {
  const { gulpEslint: eslint } = plugins;
  gulp.task('lint:sass', () =>
    gulp.src(config.sass.source).pipe(plugins.gulpStylelint({
      reporters: [{ formatter: 'string', console: true }],
    })));

  gulp.task('lint:js', () =>
    gulp
      .src(config.js.source)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  );

  gulp.task('lint', ['lint:sass', 'lint:js']);
};
