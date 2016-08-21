import gulp from 'gulp';
import config from '../../config';

import { hugo_dev, hugo_reload } from './hugo';
import { serve } from './serve';

/**
 * Start browsersync task and then watch files for changes
 */
export function watch(done) {
  gulp.watch(config.watch.hugo, gulp.series(hugo_reload, hugo_dev));
  // gulp.watch(config.watch.styles,  ['styles', 'lint-styles']);
  // gulp.watch(config.watch.scripts, ['scripts', 'jshint']);
  // gulp.watch(config.watch.images,  ['images']);
  // gulp.watch(config.watch.svg,     ['copy:fonts']);
  // gulp.watch(config.watch,sprites, ['sprites']);
  done();
}
