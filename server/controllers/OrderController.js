const Order = require("../models/Order");

// Place Order
const placeOrder = async (req,res)=>{

    try{

        const order = await Order.create(req.body);

        res.status(201).json({
            success:true,
            message:"Order Placed Successfully",
            order
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Get My Orders

const getOrders = async(req,res)=>{

    try{

        const orders = await Order.find().populate("user").populate("books.book");

        res.status(200).json({
            success:true,
            count:orders.length,
            orders
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports={
    placeOrder,
    getOrders
};