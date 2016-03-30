import gulp from 'gulp';
import del from 'del';
import cache from 'gulp-cache';
import config from './../constants';

export function cleanDeleteFiles(done) {
  return del([`${config.paths.all}/**`, `!${config.paths.dist}`,`!${config.paths.dist}/static/**`, '.sass-cache'], done);
}

export function cleanClearCache(done) {
  return cache.clearAll(done);
}