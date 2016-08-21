import gulp        from 'gulp';
import browsersync from 'browser-sync';
import config      from '../../config';

export function serve(done) {
  browsersync(config.browsersync.development);
  done();
}
