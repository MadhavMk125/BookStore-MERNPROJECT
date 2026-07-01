const Order = require("../models/Order");
const Book = require("../models/Book");

// ===============================
// Place Order
// ===============================
const placeOrder = async (req, res) => {

    try {

        const {
            book,
            quantity,
            shippingAddress,
            paymentMethod
        } = req.body;

        // Check Book

        const selectedBook = await Book.findById(book);

        if (!selectedBook) {

            return res.status(404).json({
                success: false,
                message: "Book Not Found"
            });

        }

        // Check Stock

        if (selectedBook.stock < quantity) {

            return res.status(400).json({
                success: false,
                message: "Book Out Of Stock"
            });

        }

        // Calculate Total Price

        const totalPrice = selectedBook.price * quantity;

        // Create Order

        const order = await Order.create({

            user: req.user._id,

            book,

            quantity,

            totalPrice,

            shippingAddress,

            paymentMethod

        });

        // Update Stock

        selectedBook.stock = selectedBook.stock - quantity;

        await selectedBook.save();

        res.status(201).json({

            success: true,

            message: "Order Placed Successfully",

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ===============================
// Get Logged-in User Orders
// ===============================

const getMyOrders = async (req, res) => {

    try {

        const orders = await Order.find({

            user: req.user._id

        })

        .populate("book")

        .populate("user", "name email");

        res.status(200).json({

            success: true,

            count: orders.length,

            orders

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ===============================
// Get Single Order
// ===============================

const getSingleOrder = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id)

        .populate("book")

        .populate("user", "name email");

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order Not Found"

            });

        }

        res.status(200).json({

            success: true,

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ===============================
// Cancel Order
// ===============================

const cancelOrder = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order Not Found"

            });

        }

        if (order.orderStatus === "Delivered") {

            return res.status(400).json({

                success: false,

                message: "Delivered Order Cannot Be Cancelled"

            });

        }

        order.orderStatus = "Cancelled";

        await order.save();

        res.status(200).json({

            success: true,

            message: "Order Cancelled Successfully",

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ===============================
// Admin - Get All Orders
// ===============================

const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find()

        .populate("book")

        .populate("user", "name email");

        res.status(200).json({

            success: true,

            count: orders.length,

            orders

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ===============================
// Admin - Update Order Status
// ===============================

const updateOrderStatus = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order Not Found"

            });

        }

        order.orderStatus = req.body.orderStatus;

        await order.save();

        res.status(200).json({

            success: true,

            message: "Order Status Updated",

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    placeOrder,

    getMyOrders,

    getSingleOrder,

    cancelOrder,

    getAllOrders,

    updateOrderStatus

};