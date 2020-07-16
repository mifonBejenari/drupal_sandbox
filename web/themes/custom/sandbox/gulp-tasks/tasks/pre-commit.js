/**
 * @file
 * Task: Pre-Commit.
 */

module.exports = function preCommitTask(gulp) {
  gulp.task('pre-commit', gulp.series('lint', 'prettier:check'));
};
