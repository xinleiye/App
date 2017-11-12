
const express = require("express");
const mongoDB = require("mongoose");

// 加入express的路由Router
const router = express.Router();
const indexRoute = router.get("../", (req, res) => {
    res.status(200);
});

// 配置服务端，配合vue的history路由模式
const history = require("connect-history-api-fallback");

const app = express();

app.use(history({
    rewrites: [
        { from: /^\/abc$/, to: "/" }
    ]
}));

app.use("/", express.static(__dirname + "/dist"));

app.get("/", indexRoute);

mongoDB.connect("mongodb://localhost:28017/app", { useMongoClient: true }, function (err) {
    if (err) {
        console.log("数据库链接失败!\n");
    } else {
        app.listen(3000, function () {
            console.log("Example app listening on port 3000!\n");
        });
    }
});
