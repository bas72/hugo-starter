import gulp from 'gulp';

//task imports
// import { delete } from './development/delete';
// import { serve }  from './development/serve';
import { styles } from './development/styles';
// import { watch }  from './development/watch';

// main build
// gulp.task('build', gulp.series(
//   watch,
//   // gulp.parallel(hugo, styles, scripts, images, copyFonts),
//   gulp.parallel(styles)
//   // base64
//   )
// );

gulp.task('build', gulp.series(styles));

gulp.task('default', gulp.series('build'));
