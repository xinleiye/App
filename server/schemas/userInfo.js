var userInfo = require("mongoose");

module.exports = new userInfo.Schema({
    username: {
        type: String,
        default: "admin"
    },
    password: {
        type: String,
        default: "1234"
    },
    id: {
        type: Number,
        default: 1
});
