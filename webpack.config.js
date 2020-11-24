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
        new CopyWebpackPlugin({
            patterns: [
                { from: '_redirects', to: 'docs/' },
                { from: 'app/manifest.json', to: 'docs/' },
                { from: 'app/icons-512.png', to: 'docs/' },
                { from: 'app/favicon.png', to: 'docs/' },
                { from: 'app/worker.js', to: 'docs/' },
                { from: 'app/styles.css', to: 'docs/' }
            ]
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}
