const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:String,
    gender:String,
    dob:Date,
    address:String,
    pincode:Number,
    contactno:Number,
    email:String,
    password:String,
    role:String,
    status:{
        type : Number,
        default: 0
    }
});


module.exports = mongoose.model("Users",userSchema); 