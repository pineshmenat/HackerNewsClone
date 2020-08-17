const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
        ]
    },
    mode: (process.env.NODE_ENV === 'production') ? 'production': 'development',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
          }),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        new CopyWebpackPlugin([{from: '_redirects'}, {from: 'app/manifest.json'}, {from: 'app/icons-512.png'}, {from: 'app/favicon.png'}, {from: 'app/worker.js'}, {from: 'app/styles.css'}])
    ],
    devServer: {
        historyApiFallback: true
    }
}
