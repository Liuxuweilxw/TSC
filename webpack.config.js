const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports={

    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use:'ts-loader',
                exclude: /node-modules/
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/app.html"
        }),
        new CleanWebpackPlugin(),
    ],

    resolve: {
        extensions: ['.ts','.js']
    }
};