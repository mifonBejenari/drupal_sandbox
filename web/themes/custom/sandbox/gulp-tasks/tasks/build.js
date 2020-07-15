/**
 * @file
 * Task: Build.
 */

module.exports = function buildTask(gulp, plugins) {
  gulp.task('build', (done) => {
    gulp.series(
      ['styles', 'scripts'],
    );
    done();
  });
};
