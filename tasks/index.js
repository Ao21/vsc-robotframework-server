import gulp from 'gulp';
import config from './../constants';
import {compileServerTS, runNodeServer} from './gulp-server';

gulp.task('server', (done) => {
    gulp.watch(
        [config.paths.typescript.server, config.paths.typescript.typings],
        gulp.series(compileServerTS, runNodeServer)
    )
    done();
});

