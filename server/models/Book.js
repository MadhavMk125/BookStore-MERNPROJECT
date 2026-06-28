const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        default:1
    },

    image:{
        type:String,
        default:""
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model("Book",bookSchema);