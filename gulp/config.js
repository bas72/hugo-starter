const src        = 'app';
const build      = 'build';
const dev        = 'build/development';
const prod       = 'build/production';
const srcAssets  = 'app/_assets';
const devAssets  = 'build/assets'
const prodAssets = 'build/production/assets'

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [dev, build, src]
      },
      port: 9999,
      files: [
        devAssets + '/css/*.css',
        devAssets + '/js/*.js',
        devAssets + '/images/**',
        devAssets + '/fonts/*'
      ]
    }
  }
};
