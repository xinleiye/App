const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

// 配置服务端，配合vue的history路由模式
const history = require("connect-history-api-fallback");

const app = express();
const config = require("./build/webpack.dev.js");
//const connect = require("connect");

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publishPath: config.output.publicPath
}));

app.use(history());

app.listen(3000, function() {
    console.log("Example app listening on port 3000!\n");
});
