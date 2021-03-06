"use strict"

const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = module.exports = {
    entry: {
        app: "./src/main.js"
    },
    plugins: [
        new CleanWebpackPlugin(["*.*"], { root: path.resolve(__dirname, "../dist") } ),
        new HtmlWebpackPlugin({
            title: "App",
            filename: "index.html",
            template: "./index.html",
            inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: "[name].bundle.js",
        // chunkFilename 定义了非入口bundle文件的名字
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: "/node_modules/",
                loader: "vue-loader",
                //options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: "/node_modules/",
                loader: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|git|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    //name: utils.assetsPath("img/[name].[hash:7].[ext]")
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    "csv-loader"
                ]
            },
            {
                test: /\.(xml)$/,
                use: [
                    "xml-loader"
                ]
            }
        ]
    }
};
