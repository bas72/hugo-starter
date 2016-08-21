import gulp from 'gulp';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';
import config from '../../config';
/**
 * Check JavaScript sytax with JSHint
 */
export function lintScripts() {
  return gulp.src(config.jshint.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
}
