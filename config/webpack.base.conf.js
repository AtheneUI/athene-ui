const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isMini = process.env.BUILD_ENV === "production";

module.exports = {
    entry: './components/index.ts',
    output: {
        filename: isMini ? "athene.min.js":  "athene.js",
        path: path.resolve(__dirname, '..', 'dist'),
        library: "AtheneUI",
        libraryTarget: "umd",
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './template/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: isMini ? "athene.min.css": "athene.css",
        }),
    ],
    module: {
        rules: [
            { // 配置 css
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ],
            },
            { // 配置 less
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {

                            },
                            sourceMap: true,
                        },
                    }
                ],
            },
            { // 配置[js, jsx, ts, tsx]
                test: /\.((?:j|t)[s]x?)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            { // 配置图片
                test: /\.(?:png|jpg|gif|jpeg|webp)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 1 * 1024,
                    },
                },
            },
            { // 配置字体文件
                test: /\.(svg|eot|ttf|woff|woff2)\??.*$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule:false,
                        limit: 20 * 1024,
                        outputPath: "./iconfont/",
                    },
                },
            },
            { // 配置 html 中的图片
                test: /\.html?$/,
                use: {
                    loader: 'html-loader',
                },
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
};