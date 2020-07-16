/**
 * @file
 * Task: Build.
 */

module.exports = function buildTask(gulp) {
  gulp.task('build',
    gulp.series(
      'styles',
      'scripts',
      (done) => {
        done();
      }
  ));
};
