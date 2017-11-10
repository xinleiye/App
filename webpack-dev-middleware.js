const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

// 加入express的路由Router
const router = express.Router();
const indexRoute = router.get("/", (req, res) => {
    res.status(200);
})
// 配置服务端，配合vue的history路由模式
const history = require("connect-history-api-fallback");

const app = express();

const config = require("./build/webpack.dev.js");
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    publishPath: config.output.publicPath
}));


app.use(history({
    rewrites: [
        { from: /^\/abc$/, to: "/" }
    ]
}));

app.use("/", express.static(__dirname + "/dist"));

app.get("/", indexRoute);

app.listen(3000, function() {
    console.log("Example app listening on port 3000!\n");
});
