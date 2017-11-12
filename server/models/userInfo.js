
var mongoose = require("mongoose");
var userInfoSchema = require("../schemas/userInfo");

module.exports = mongoose.model("userInfo", userInfoSchema);
