import gulp    from 'gulp';
import config  from '../../config';

export function scripts() {
  return gulp.src(config.scripts.src)
  .pipe(gulp.dest(config.scripts.dest));
}
