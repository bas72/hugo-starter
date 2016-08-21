import gulp from 'gulp';

//task imports
import { clean } from './dev/clean';
import { hugo_dev, hugo_prod, hugo_reload } from './dev/hugo';
import { images } from './dev/images'
import { lint_styles } from './dev/lint_styles';
import { serve }  from './dev/serve';
import { styles } from './dev/styles';
import { watch }  from './dev/watch';

// main build
gulp.task('build', gulp.series(
  clean,
  // gulp.parallel(hugo, styles, scripts, images, copyFonts),
  gulp.parallel(hugo_dev, styles, images)
  // base64
  )
);

// gulp.task('build', gulp.series(clean, styles));

gulp.task('default', gulp.series(watch, serve, 'build'));
