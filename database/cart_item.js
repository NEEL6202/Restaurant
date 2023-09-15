const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    add_to_cart_id:String,
    pid:String,
    quantity:Number,
    price_total:Number
});

module.exports = mongoose.model("cart_item",UserSchema); 