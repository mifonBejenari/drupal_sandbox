/**
 * @file
 * Task: Watch.
 */

module.exports = function watchTask(gulp, plugins, config) {
  const { sass, js } = config;
  gulp.task('watch', () => {
    gulp.watch(sass.source, gulp.series('styles'));
    gulp.watch(js.source, gulp.series('scripts'));
  })
};
