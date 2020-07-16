/**
 * @file
 * Task: Lint.
 */

module.exports = function lintTask(gulp, plugins, config) {
  gulp.task('lint', gulp.series(
    //  Sass lint.
    () =>
      gulp
        .src(config.sass.source)
        .pipe(plugins.gulpStylelint({
          reporters: [{ formatter: 'string', console: true }],
        })
    ),
    //  JS lint.
    () =>
      gulp
        .src(config.js.source)
        .pipe(plugins.gulpEslint())
        .pipe(plugins.gulpEslint.format())
        .pipe(plugins.gulpEslint.failAfterError())
  ));
};
