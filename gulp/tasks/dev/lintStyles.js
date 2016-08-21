import gulp from 'gulp';
import postcss from 'gulp-postcss';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import config from '../../config';

export function lintStyles() {
  return gulp.src(config.lintStyles.src)
  .pipe(postcss([
    stylelint(config.lintStyles.options.stylelint),
    reporter(config.lintStyles.options.reporter)
  ]));
}
