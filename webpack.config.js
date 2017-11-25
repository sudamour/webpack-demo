var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: false,
            title: 'this is a.html',
            minify: {
                removeComments: true
            },
            chunks: ['main', 'a']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: false,
            title: 'this is b.html',
            minify: {
                removeComments: true
            },
            chunks: ['main', 'b']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: false,
            title: 'this is c.html',
            minify: {
                removeComments: true
            },
            chunks: ['main', 'c']
        })
    ]
}