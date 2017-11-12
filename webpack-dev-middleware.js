const fs = require("fs");
const webpack = require("webpack");
//const webpackDevMiddleware = require("webpack-dev-middleware");

const config = require("./build/webpack.dev.js");
const compiler = webpack(config);
/*
webpackDevMiddleware(compiler, {
    watchOptions: {
        aggregateTimeout: 3000
    },
    publicPath: config.output.path
});

compiler.run(
    function (err, stats) {
        //console.log(err);
        //console.log(stats);
});
*/
/*
const distPath = config.output.path;

fs.readdir("./dist", function (err, files) {
    if (err) {

    } else {
        files.forEach(function (file, index) {
            var tmpPath = distPath + "\\" + file;
            fs.unlinkSync(tmpPath);
        });
    }
})
*/
console.log("Start build");
const watcher = compiler.watch(
    {
        aggregateTimeout: 3000
    },
    function (err, stats) {
        if (err) {
            console.log(err);
        } else {
            console.log("Compile success!");
        }
    }
);
