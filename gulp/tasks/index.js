import gulp from 'gulp';

//task imports
import { clean } from './development/clean';
import { hugo_dev, hugo_prod, hugo_reload } from './development/hugo';
import { lint_styles } from './development/lint_styles';
// import { serve }  from './development/serve';
import { styles } from './development/styles';
// import { watch }  from './development/watch';

// main build
gulp.task('build', gulp.series(
  clean,
  // gulp.parallel(hugo, styles, scripts, images, copyFonts),
  gulp.parallel(hugo_dev, styles)
  // base64
  )
);

// gulp.task('build', gulp.series(clean, styles));

gulp.task('default', gulp.series('build'));
