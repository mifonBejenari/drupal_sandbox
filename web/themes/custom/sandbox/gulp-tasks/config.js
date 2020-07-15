/**
 * @file
 * Task: Configuration.
 */

module.exports = {
  sass: {
    source: ['styles/scss/**/*.scss'],
    destination: 'styles/css',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules'],
    },
  }
};
