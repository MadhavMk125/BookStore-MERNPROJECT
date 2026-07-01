const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    author:{
        type:String,
        required:true,
        trim:true
    },

    category:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true,
        min:0
    },

    stock:{
        type:Number,
        default:1
    },

    image:{
        type:String,
        default:""
    },

    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    rating:{
        type:Number,
        default:0
    },

    numReviews:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model("Book",bookSchema);