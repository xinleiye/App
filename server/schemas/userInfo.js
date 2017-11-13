var userInfo = require("mongoose");

module.exports = new userInfo.Schema({
    username: {
        type: String,
        default: "admin"
    },
    password: {
        type: String,
        default: "admin"
    },
    id: {
        type: Number,
        default: 1
    }
})
