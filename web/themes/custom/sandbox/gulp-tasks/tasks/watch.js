/**
 * @file
 * Task: Watch.
 */

module.exports = function watchTask(gulp, plugins, config) {
  const { sass } = config;
  gulp.task('watch', () => {
    gulp.watch(sass.source, gulp.series('styles', 'scripts'));
  })
};
