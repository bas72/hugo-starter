import gulp from 'gulp';
import rev from 'gulp-rev';
import collect from 'gulp-rev-collector';
import config  from '../../config';

/**
 * Revision all asset files and
 * write a manifest file
 */
export function revision() {
  return gulp.src(config.revision.src.assets, { base: config.revision.src.base })
    .pipe(gulp.dest(config.revision.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.revision.dest.assets))
    .pipe(rev.manifest({ path: config.revision.dest.manifest.name }))
    .pipe(gulp.dest(config.revision.dest.manifest.path));
}

export function rev_collect() {
  return gulp.src(config.collect.src)
  .pipe(collect())
  .pipe(gulp.dest(config.collect.dest));
}
