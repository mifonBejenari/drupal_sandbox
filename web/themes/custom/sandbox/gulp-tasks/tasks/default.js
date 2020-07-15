/**
 * @file
 * Task: Default.
 */

module.exports = function defaultTask(gulp) {
  gulp.task('default', (done) => {
    gulp.series(
      'build',
    );
    done();
  });
};
