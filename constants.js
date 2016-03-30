const path = require('path');

var config = {
    paths: {
        client: path.resolve(__dirname, 'src/client'),
        server: path.resolve(__dirname, 'src/server'),
        build: {
            all: path.resolve(__dirname, 'build'),
            server: path.resolve(__dirname, 'build/server'),
            client: path.resolve(__dirname, 'build/client'),
        },
        dist: path.resolve(__dirname, 'dist'),
        nodeModules: path.resolve(__dirname, 'node_modules'),
        typescript: {
            client: path.resolve(__dirname, 'src/client/**/*.ts'),
            server: path.resolve(__dirname, 'src/server/**/*.ts'),
            typings: path.resolve(__dirname, 'typings/main/**/*.d.ts')
        }
    }
}

module.exports = config;