const gulp = require('gulp');
const config = require('./gulp-tasks/config');
const plugins = require('gulp-load-plugins')({
  pattern: '*',
  rename: {
    'run-sequence': 'runSequence',
  },
});

//  Tasks.
require('./gulp-tasks/tasks/styles')(gulp, plugins, config);
// require('./gulp-tasks/tasks/build')(gulp, plugins, config);
// require('./gulp-tasks/tasks/default')(gulp, plugins, config);
require('./gulp-tasks/tasks/watch')(gulp, plugins, config);
