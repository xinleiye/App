

var express = require("express");
var userInfo = require("../models/userInfo");

var apiRouter = express.Router();

var responseData;

apiRouter.use(function(req, res, next) {
    responseData = {
        code: "-1",
        message: ""
    };
    next();
});

apiRouter.post("/user/login", function(req, res) {
    const reqUsername = req.body.username;
    userInfo.findOne({
        username: reqUsername
    })
    .then(function (content) {
        if (content) {
            if (content.password === req.body.password) {
                responseData.username = reqUsername;
                responseData.id = content.id;
                responseData.code = 1;
                responseData.message = "Login success";
            } else {
                responseData.code = -1;
                responseData.message = "Incorrect username or password";
            }
        } else {
            responseData.code = -1;
            responseData.message = "Incorrect username or password";
        }
        res.json(responseData);
    });
});

apiRouter.post("/user/logout", function(req, res) {
    responseData.code = 1;
    res.json(responseData);
});

module.exports = apiRouter;
