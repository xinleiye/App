const merge = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common.js");

// 用于打包后bundle文件分析
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(commonWebpackConfig, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "../dist"
    },
/*
    plugins: [
        new BundleAnalyzerPlugin({
            // 设置为只生成分析文件，不打开浏览器
            analyzerMode: "disabled",
            generateStatsFile: true
        })
    ]
*/
});
