const {
    merge
} = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isMini = process.env.BUILD_ENV === "production";

const plugins = () => {
    const plugins = [];
    if (isMini) {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                defaultSizes: 'stat',
                openAnalyzer: true,
            })
        );
    }
    return plugins;
};

const optimization = () => {
    let minimizer = [];
    if(!isMini) return minimizer;
    minimizer = [
        new CssMinimizerWebpackPlugin({
            exclude: /node_modules/,
            parallel: true,
        }),
        new TerserWebpackPlugin({
            parallel: true,
        }),
    ];
    return minimizer;
};

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: plugins(),
    optimization: {
        minimizer: optimization(),
    },
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
    devtool: 'source-map',
});