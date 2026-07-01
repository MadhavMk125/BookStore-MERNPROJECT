const Book = require("../models/Book");
const Order = require("../models/Order");

// Seller Profile

const sellerProfile = async (req, res) => {

    res.status(200).json({

        success: true,

        seller: req.user

    });

};

// My Books

const myBooks = async (req, res) => {

    try {

        const books = await Book.find({

            seller: req.user._id

        });

        res.status(200).json({

            success: true,

            count: books.length,

            books

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Orders Of My Books

const sellerOrders = async (req, res) => {

    try {

        const books = await Book.find({

            seller: req.user._id

        });

        const ids = books.map(book => book._id);

        const orders = await Order.find({

            book: {

                $in: ids

            }

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

module.exports = {

    sellerProfile,

    myBooks,

    sellerOrders

};