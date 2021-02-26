const path = require('path');

module.exports = {
    entry: path.resolve('src', './components/render.jsx'),
    module: {
        rules: [{
            test: /\.(js|.jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        extentions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    }
};