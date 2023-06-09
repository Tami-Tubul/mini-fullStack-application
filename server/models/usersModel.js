const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({

    userName: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("users", usersSchema);