const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId
    },
    productId : {
        type : mongoose.Schema.ObjectId
    }
})

module.exports = mongoose.model("like", likeSchema);