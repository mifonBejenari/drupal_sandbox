/**
 * @file
 * Task: Build.
 */

module.exports = function buildTask(gulp, plugins) {
  gulp.task('build', () => {
    plugins.runSequence(
      'prettier',
      ['styles'],
    );
  });
};
