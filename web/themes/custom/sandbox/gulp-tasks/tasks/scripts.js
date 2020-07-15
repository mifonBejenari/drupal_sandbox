/**
 * @file
 * Task: Default.
 */

module.exports = function scriptsTask(gulp, plugins, config) {
  gulp.task('scripts', () =>
    gulp
      .src(config.js.source)
      .pipe(
        plugins.babel({
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: ['IE >= 11'],
                },
              },
            ],
          ],
        })
      )
      .pipe(gulp.dest(config.js.destination))
  );
};
