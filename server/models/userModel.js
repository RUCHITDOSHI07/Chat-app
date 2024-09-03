const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },

    Email:{
        type:String,
        required:true,
        unique:true,
        max:50,
    },

    Password:{
        type:String,
        required:true,
        min:8,
    }
})


module.exports =mongoose.model("User",userSchema);