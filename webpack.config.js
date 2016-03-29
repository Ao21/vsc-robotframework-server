const constants = require('./constants');
const TARGET = process.env.npm_lifecycle_event;
const merge = require('webpack-merge');
const webpack = require('webpack');
var config = {};


const options = {
    entry: {
        client: constants.paths.client,
    },
    resolveLoader: {
        root: constants.paths.nodeModules
    },
    resolve: {
        extensions: ['', '.tsx', '.webpack.js', '.web.js', '.ts', '.js'],
        modulesDirectories: [constants.paths.nodeModules],
        alias: {
        },
    },
    output: {
        path: constants.paths.build,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
}

if (TARGET === 'start' || !TARGET) {
    config = merge(options, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: constants.paths.build,

            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env so this is easy to customize.
            //
            // If you use Vagrant or Cloud9, set
            // host: process.env.HOST || '0.0.0.0';
            //
            // 0.0.0.0 is available to all network devices unlike default
            // localhost
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if (TARGET === 'dist') {
    config = merge(options, {});
}
console.log(config);
module.exports = config;


