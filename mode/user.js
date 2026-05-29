const mongoose = require("mongoose")

const userScema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:True
    },
    password:{
        type:String,
        required:True
    }
})

module.exports = mongoose.model("users",userScema)