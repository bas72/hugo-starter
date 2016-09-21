import gulp from 'gulp';
import postcss from 'gulp-postcss';
import nano from 'cssnano';
import uglify from 'gulp-uglify'
import size from 'gulp-size';
import config  from '../../config';

export function optimise_css() {
  return gulp.src(config.optimise.css.src)
  .pipe(postcss([nano]))
  .pipe(gulp.dest(config.optimise.css.dest))
  .pipe(size());
}

export function optimise_js() {
  return gulp.src(config.optimise.js.src)
  .pipe(uglify(config.optimise.js.options))
  .pipe(gulp.dest(config.optimise.js.dest))
  .pipe(size());
}

export function optimise_images() {
  return gulp.src(config.optimise.images.src)
  .pipe(imagemin(config.optimise.images.options))
  .pipe(gulp.dest(config.dest))
  .pipe(size());  
}
