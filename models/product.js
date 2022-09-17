const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product name is required']
    },
    price:{
        type:Number,
        required:[true,'Product price is required'],
    },
    featured:{
        type:Boolean,
        default: false,
    },
    company:{
        type:String,
        required:[true,'Company name is required'],
        enum:{
            values:['ikea', 'liddy','marcos','caressa'],
            message: '{VALUE} is not supported'
        },
        // enum: ['ikea', 'liddy','marcos','caressa']
    },
    rating:{
        type:Number,
        default: 4.5,
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    }
});

//Export the model
module.exports = mongoose.model('User', productSchema );