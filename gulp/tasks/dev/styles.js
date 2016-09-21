import gulp    from 'gulp';
import gulpFilter from 'gulp-filter';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import nano    from 'cssnano';
import config  from '../../config';

const processors = [
  autoprefixer
];

export function styles() {
  return gulp.src(config.styles.src)
  .pipe(postcss(processors))
  .pipe(gulp.dest(config.styles.dest));
}
