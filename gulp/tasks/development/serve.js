import gulp from 'gulp';
import browsersync from 'browser-sync';
var config = require('../../config').browsersync.development;
// import config from ''../../config'

export function serve() {
  browsersync(config);
}
