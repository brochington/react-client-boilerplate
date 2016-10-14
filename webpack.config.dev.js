var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: "eval-source-map",
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3034',
        'webpack/hot/only-dev-server',
        './src/js/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file?hash=sha512&digest=hex&name=[hash].[ext]",
            include: path.join(__dirname, 'src/img')
        }]
    }
}
