const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: '[name]-[contenthash].js',
        assetModuleFilename: 'assets/[name]-[contenthash][ext]'
    },
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback: true
      },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader' 
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/icons/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        }),
        new Dotenv()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
      }
}