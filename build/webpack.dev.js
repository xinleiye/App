const merge = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common.js");
module.exports = merge(commonWebpackConfig, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "../dist"
    }
});
