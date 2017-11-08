"use strict"

const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const vueLoaderConfig = require("")
const webpackConfig = module.exports = {
    entry: {
        app: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
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
        path: path.resolve(__dirname, "..", "dist")
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
                loader: "vue-loader",
                //options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
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