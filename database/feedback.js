const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    userid:{
        type:[{type: mongoose.Schema.Types.ObjectId, ref:'users'}],
        required: [true,"User is required"]
    },
    feedback:String
});

module.exports = mongoose.model("feedbacks",UserSchema); 