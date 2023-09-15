const mongoose = require('mongoose');

const bookingSchema= new mongoose.Schema({
    userid:String,
    table_no:Number,
    no_of_person:Number,
    menu_id:String,
    price:Number,
    date_time:Date,
    special_request:String,
    status:{
        type : Number,
        default: 0
    }
});


module.exports = mongoose.model("Booking_detail",bookingSchema); 