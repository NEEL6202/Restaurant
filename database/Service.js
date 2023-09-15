const mongoose = require('mongoose');

const serviceSchema= new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    status:{
        type : Number,
        default: 0
    }
});


module.exports = mongoose.model("Service_detail",serviceSchema); 