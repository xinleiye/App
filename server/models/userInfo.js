
var mongoose = require("mongoose");
var userInfoSchema = require("../schemas/userInfo");
var userInfoModel = mongoose.model("userInfo", userInfoSchema);

module.exports = userInfoModel;
