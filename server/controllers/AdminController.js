const User = require("../models/User");
const Book = require("../models/Book");
const Order = require("../models/Order");
// Dashboard

const dashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalBooks = await Book.countDocuments();

        const totalOrders = await Order.countDocuments();

        const totalSellers = await User.countDocuments({
            role: "seller"
        });

        res.status(200).json({

            success: true,

            statistics: {

                totalUsers,
                totalBooks,
                totalOrders,
                totalSellers

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Get Users


const getUsers = async (req, res) => {

    try {

        const users = await User.find().select("-password");

        res.status(200).json({

            success: true,

            count: users.length,

            users

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// Delete User


const deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                success: false,
                message: "User Not Found"

            });

        }

        await user.deleteOne();

        res.status(200).json({

            success: true,
            message: "User Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get Books
const getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("seller", "name email");
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
// Delete Book
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book Not Found"
            });
        }
        await book.deleteOne();
        res.status(200).json({
            success: true,
            message: "Book Deleted Successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user", "name email")
            .populate("book");
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
    dashboard,
    getUsers,
    deleteUser,
    getBooks,
    deleteBook,
    getOrders

};