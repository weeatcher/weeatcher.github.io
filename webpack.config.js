var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "bundle.min": __dirname + '/src/index.tsx'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/static'
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts|js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'awesome-typescript-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.js', '.jsx', '.ts'],
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                include: /\.js$/,
            })
        ]
    }
};