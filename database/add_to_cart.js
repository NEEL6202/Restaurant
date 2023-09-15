const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    // add_to_cart_id:String,
    customer_id:String,
    date:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:Number,
        default:'0'
    }
});

module.exports = mongoose.model("add_to_cart",UserSchema); 