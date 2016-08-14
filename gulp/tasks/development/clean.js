import gulp   from 'gulp';
import del    from 'del';
import config from '../../config';

export function clean(done) {
  // del(config.delete.src);
  del.sync(config.delete.src)
  done();
}
