import gulp        from 'gulp';
import gutil       from 'gulp-util';
import cp          from 'child_process'
import browsersync from 'browser-sync';
import path        from 'path';
import config      from '../../config';

function hugo(drafts) {
    let src;
    let dst;

    if (drafts) {
      src = path.join(process.cwd(), config.hugo.dev.src);
      dst = path.join(process.cwd(), config.hugo.dev.dest);
    } else {
      src = path.join(process.cwd(), config.hugo.prod.src);
      dst = path.join(process.cwd(), config.hugo.prod.dest);
    }

    gutil.log('src: ' + src + ' dst: ' + dst);

    // var cmd = 'hugo --config=_src/_config.yaml -s ' + src + ' -d ' + dst;
    let cmd = 'hugo --config=' + path.join(config.hugo.dev.src, config.hugo.dev.config + ' -s ') + src + ' -d ' + dst;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    const result = cp.execSync(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

export function hugo_dev(done) {
  hugo(true)
  done();
}

export function hugo_prod(done) {
  hugo(false)
  done();
}

// below this line is the method suggested in article, but could not get line command to work
// export function hugo(done) {
//   browsersync.notify('Compiling Hugo');
//   // spaces are necessary in below strings to allow for separation between commands
//   return cp.spawn('hugo', ['--config=' + config.hugo.dev.src + config.hugo.dev.config, '-s ' + config.hugo.dev.src, '-d ' + config.hugo.dev.dest], {stdio: 'inherit'})
//   .on('close', done);
//   // cp.spawn('hugo --config=app/hugo/config.yaml -s app/hugo -d build/development/hugo')
//   // done();
// }
//
// // reload function needs to be included into above task as now way to happen after in gulp.parallel
export function hugo_reload(done) {
  browsersync.reload();
  done();
}

// return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' })
//   .on('close', done);
// });


// if drafts = on then build dev
// if drafts = not on the don't build dev
// if prod then doesn't matter either way
