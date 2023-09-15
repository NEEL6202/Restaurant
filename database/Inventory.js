const mongoose = require('mongoose');

const inventorySchema= new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number,
    purchase_date:Date,
    purchase_place:String,
    status:{
        type : Number,
        default: 0
    }
});


module.exports = mongoose.model("Inventory_detail",inventorySchema); 