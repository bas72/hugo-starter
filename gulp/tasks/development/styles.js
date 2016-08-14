import gulp from 'gulp';
import postcss from 'gulp-postcss';
import nano from 'cssnano';
import config from '../../config';

const processors = [
  nano
];

export function styles() {
  return gulp.src(config.styles.src)
  .pipe(postcss(processors))
  .pipe(gulp.dest(config.styles.dest));
}
