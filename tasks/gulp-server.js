import gulp from 'gulp';
const config = require('../constants');
const $ = require('gulp-load-plugins')();
const tsProject = $.typescript.createProject('./tsconfig.json');
let node;
const spawn = require('child_process').spawn;

export function compileServerTS() {
    let srcFiles = [
        config.paths.typescript.server,
        config.paths.typescript.typings
    ]

    let tsResult =
        gulp.src(srcFiles)
            .pipe($.typescript(tsProject))

    tsResult.dts.pipe(gulp.dest(config.paths.build.server));
    return tsResult.js
        .pipe(gulp.dest(config.paths.build.server));

};

export function runNodeServer(cb) {
    if (node) node.kill()
    node = spawn('node', ['build/server/index.js'], { stdio: 'inherit' })
    node.on('close', function(code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
}

process.on('exit', function() {
    if (node) node.kill()
})

