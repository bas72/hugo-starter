import gulp from 'gulp';

import delete from 'development/delete';
import serve  from 'development/serve';
import styles from 'development/styles';
import watch  from 'developmentwatch';

gulp.task('build',
  gulp.series(delete,
    gulp.parallel(hugo, styles, scripts, images, copyFonts),
    base64
  )
);
