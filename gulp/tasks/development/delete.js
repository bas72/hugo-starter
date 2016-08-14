import gulp from 'gulp';
import del from 'del';
var config = require('../../config').delete;

export function delete() {
  del(config.src);
}
