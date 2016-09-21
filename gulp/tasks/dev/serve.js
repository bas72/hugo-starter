import gulp        from 'gulp';
import browsersync from 'browser-sync';
import config      from '../../config';

export function serve(done) {
  browsersync(config.browsersync.dev);
  done();
}

export function serve_prod(done) {
  browsersync(config.browsersync.prod);
  done();
}
