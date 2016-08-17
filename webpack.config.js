var path = require('path');
var webpack = require('webpack');
var extractTextPlugin = require("extract-text-webpack-plugin");

// module.exports = {
//     entry: {
//         main: './src/js/main.js',
//         styles: './src/css/styles.css'
//         // main: ['./src/js/main.js', './src/css/main.js'] // ,
//         // server: ['./src/js/api/server.js']
//         // ratefinder: './js/ratefinder.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'public/'),
//         // path: './public/[name]/',
//         // main: 'main.bundle.js',
//         // styles: 'main.bundle.css'
//         // fileName:
//         filename: "[name].js" // ,
//         // chunkFilename: "[id].js"
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 }
//             },
//             // Extract css files
//             {
//                 test: /\.css$/,
//                 loader: extractTextPlugin.extract("style-loader", "css-loader")
//             },
//             // Optionally extract less files
//             // or any other compile-to-css language
//             {
//                 test: /\.less$/,
//                 loader: extractTextPlugin.extract("style-loader", "css-loader!less-loader")
//             }
//             // You could also use other loaders the same way. I. e. the autoprefixer-loader
//         ]
//     },
//     stats: {
//         colors: true
//     },
//     devtool: 'source-map',
//     // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
//     plugins: [
//         new extractTextPlugin("[name].css")
//     ]
//
// };

module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/js/'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
