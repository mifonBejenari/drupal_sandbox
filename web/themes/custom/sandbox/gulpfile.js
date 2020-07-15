const gulp = require('gulp');
const config = require('./gulp-tasks/config');

//  Call all plugins from package.json.
const plugins = require('gulp-load-plugins')({
  pattern: '*',
  rename: {
    'run-sequence': 'runSequence',
  },
});

//  Main tasks.
require('./gulp-tasks/tasks/styles')(gulp, plugins, config);
require('./gulp-tasks/tasks/scripts')(gulp, plugins, config);

//  Watcher task.
require('./gulp-tasks/tasks/watch')(gulp, plugins, config);

//  Build task.
require('./gulp-tasks/tasks/build')(gulp, plugins, config);

//  Default task.
require('./gulp-tasks/tasks/default')(gulp, plugins, config);
