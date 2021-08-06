const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './test/index.tsx',
    devServer: {
        port: 5188,
        open: true,
        progress: true,
        compress: true,
        contentBase: './dist',
    },
});