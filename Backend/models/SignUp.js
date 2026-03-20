const mongoose = require('mongoose');

const SignUpSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default : Date.now
    }
    
})

module.exports = mongoose.model("User",SignUpSchema);