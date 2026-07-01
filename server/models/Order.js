const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true
    },

    quantity:{
        type:Number,
        required:true,
        default:1
    },

    totalPrice:{
        type:Number,
        required:true
    },

    shippingAddress:{
        type:String,
        required:true
    },

    paymentMethod:{
        type:String,
        enum:["Cash On Delivery","UPI","Card"],
        default:"Cash On Delivery"
    },

    paymentStatus:{
        type:String,
        enum:["Pending","Paid"],
        default:"Pending"
    },

    orderStatus:{
        type:String,
        enum:[
            "Placed",
            "Processing",
            "Shipped",
            "Delivered",
            "Cancelled"
        ],
        default:"Placed"
    }

},{
    timestamps:true
});

module.exports = mongoose.model("Order",orderSchema);