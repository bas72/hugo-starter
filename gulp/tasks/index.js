import gulp from 'gulp';

//task imports
import { clean } from './dev/clean';
import { hugo_dev, hugo_prod, hugo_reload } from './dev/hugo';
import { images } from './dev/images';
import { lintScripts} from './dev/lintScripts'
import { lintStyles } from './dev/lintStyles';
import { serve }  from './dev/serve';
import { styles } from './dev/styles';
import { watch }  from './dev/watch';

// main build
gulp.task('build', gulp.series(
  clean,
  gulp.parallel(hugo_dev, styles, images),
  gulp.parallel(lintStyles, lintScripts)
  // base64
  )
);

gulp.task('default', gulp.series(watch, serve, 'build'));
