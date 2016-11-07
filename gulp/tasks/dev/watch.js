import gulp from 'gulp';
import config from '../../config';

// import { serve } from './serve';

import { hugo_dev, hugo_prod, hugo_reload } from './hugo';
import { images } from './images';
import { lintScripts} from './lintScripts'
import { lintStyles } from './lintStyles';
import { scripts } from './scripts';
import { styles } from './styles';

/**
 * Start browsersync task and then watch files for changes
 */
export function watch(done) {
  gulp.watch(config.watch.hugo, gulp.series(hugo_reload, hugo_dev));
  gulp.watch(config.watch.styles, gulp.series(styles, lintStyles));
  gulp.watch(config.watch.scripts, gulp.series(scripts, lintScripts));
  gulp.watch(config.watch.images, gulp.series(images));
  // gulp.watch(config.watch.scripts, ['scripts', 'jshint']);
  // gulp.watch(config.watch.images,  ['images']);
  // gulp.watch(config.watch.svg,     ['copy:fonts']);
  // gulp.watch(config.watch,sprites, ['sprites']);
  done();
}
