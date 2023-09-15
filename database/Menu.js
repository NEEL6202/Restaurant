const mongoose = require('mongoose');

const menuSchema= new mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    meal:String,
    description:String,
    status:{
        type : Number,
        default: 0
    }
});


module.exports = mongoose.model("Menu_detail",menuSchema); 