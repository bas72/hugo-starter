import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../../config';

/**
 * Copy images to build folder
 * if not changed
 */
export function images() {
  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.images.dest));
}
