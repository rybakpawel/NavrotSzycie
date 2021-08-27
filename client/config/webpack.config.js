const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: 'index_bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 3000
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
                use:[
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: 'file-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.jsx']
      }
}