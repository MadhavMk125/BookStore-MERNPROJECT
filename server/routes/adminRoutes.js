const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

const {

dashboard,

getUsers,
deleteUser,

getBooks,
deleteBook,

getOrders

} = require("../controllers/AdminController");

// Dashboard

router.get(
    "/dashboard",
    protect,
    authorize("admin"),
    dashboard
);

// Users

router.get(
    "/users",
    protect,
    authorize("admin"),
    getUsers
);

router.delete(
    "/users/:id",
    protect,
    authorize("admin"),
    deleteUser
);

// Books

router.get(
    "/books",
    protect,
    authorize("admin"),
    getBooks
);

router.delete(
    "/books/:id",
    protect,
    authorize("admin"),
    deleteBook
);

// Orders

router.get(
    "/orders",
    protect,
    authorize("admin"),
    getOrders
);

module.exports = router;