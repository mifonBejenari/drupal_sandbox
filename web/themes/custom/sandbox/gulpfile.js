/**
 * @file
 *
 * @type {*|Gulp}
 */

const gulp = require('gulp');
const config = require('./gulp-tasks/config');

//  Call all plugins from package.json.
const plugins = require('gulp-load-plugins')({
  pattern: '*',
  rename: {
    'gulp-stylelint': 'gulpStylelint',
    'gulp-eslint': 'gulpEslint',
  }
});

//  Main tasks.
require('./gulp-tasks/tasks/styles')(gulp, plugins, config);
require('./gulp-tasks/tasks/scripts')(gulp, plugins, config);
require('./gulp-tasks/tasks/lint')(gulp, plugins, config);
require('./gulp-tasks/tasks/prettier')(gulp, plugins, config);

//  Watcher task.
require('./gulp-tasks/tasks/watch')(gulp, plugins, config);

//  Build task.
require('./gulp-tasks/tasks/build')(gulp);

//  Default task.
require('./gulp-tasks/tasks/default')(gulp);

require('./gulp-tasks/tasks/pre-commit')(gulp);
