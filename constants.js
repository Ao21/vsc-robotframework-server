const path = require('path');

var config = {
    paths: {
        client: path.resolve(__dirname, 'src/client'),
        server: path.resolve(__dirname, 'src/server'),
        build: path.resolve(__dirname, 'build'),
        dist: path.resolve(__dirname, 'dist'),
        nodeModules: path.resolve(__dirname, 'node_modules')
    }
}

module.exports = config;