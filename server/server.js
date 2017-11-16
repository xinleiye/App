
const express = require("express");
const mongoDB = require("mongoose");
const bodyParser = require("body-parser");

// 加入express的路由Router
const router = express.Router();

const indexRoute = router.get("../", (req, res) => {
    res.status(200);
});

const app = express();

//配置服务端，配合vue的history路由模式
const history = require("connect-history-api-fallback");

app.use(history({
    rewrites: [
        { from: /^\/abc$/, to: "/" }
    ]
}));

/**
 * 设置静态资源的路径，打开浏览器时，页面需要的js、css、html等文件保存目录
 */
app.use("/", express.static(__dirname + "/../dist"));

/**
 * 配置body-parse，用于解析post请求中的消息体
 */
app.use(bodyParser.json());

app.use("/api", require("./api/api"));
app.use("/biz-ws-deploy/service", require("./api/api"));
//app.get("/", indexRoute);

mongoDB.connect("mongodb://localhost:28017/app", { useMongoClient: true }, function (err) {
    if (err) {
        console.log("数据库链接失败!\n");
    } else {
        app.listen(3000, function () {
            console.log("Example app listening on port 3000!\n");
        });
    }
});
