const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
require('dotenv').config();

module.exports = (env, argv) => {
    return ({
        mode: 'development',
        resolve: {
            extensions: ['.js', '.jsx', '.css']
        },
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    query: {
                        compact: false
                    }
                },
                {
                    test: /\.css?$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new CopyWebpackPlugin([
                { from: 'assets', to: 'assets' }
            ]),
        ],
        output: {
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    default: false,
                    vendors: false
                }
            }
        },
        devServer: {
            historyApiFallback: true,
            host: process.env.HOST,
            compress: true
        },
        externals: {
            config: JSON.stringify({
                hostUrl: process.env.HOST,
                appVersion: process.env.APP_VERSION,

            })
        }
    })
}
