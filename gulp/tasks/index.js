import gulp from 'gulp';

//task imports
import { clean_dev, clean_prod } from './dev/clean';
import { hugo_dev, hugo_prod, hugo_reload } from './dev/hugo';
import { images } from './dev/images';
import { lintScripts} from './dev/lintScripts'
import { lintStyles } from './dev/lintStyles';
import { optimise_css, optimise_js } from './dev/optimise';
import { revision, rev_collect } from './dev/revision';
import { serve, serve_prod }  from './dev/serve';
import { scripts } from './dev/scripts';
import { styles } from './dev/styles';
import { watch }  from './dev/watch';

// main build
gulp.task('build', gulp.series(
  clean_dev,
  gulp.parallel(hugo_dev, styles, images),
  gulp.parallel(lintStyles, lintScripts),
  // base64
));

gulp.task('build_prod', gulp.series(
  clean_prod,
  gulp.parallel(hugo_prod, styles, images),
  gulp.parallel(optimise_css, optimise_js),
  revision, rev_collect
));

// gulp.task('build:production', function(callback) {
//   runSequence('delete', 'jekyll:production',
//   [
//     'sass',
//     'scripts',
//     'images',
//     'copy:fonts'
//   ],
//   'base64',
//   [
//     'optimize:css',
//     'optimize:js',
//     'optimize:images',
//     'optimize:html',
//     'copy:fonts:production'
//   ],
//   'revision',
//   'rev:collect',
//   callback);
// });

gulp.task('default', gulp.series(watch, serve, 'build'));
gulp.task('prod', gulp.series(serve_prod, 'build_prod'))
