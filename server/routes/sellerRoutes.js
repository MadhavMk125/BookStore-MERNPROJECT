const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

const {

    sellerProfile,

    myBooks,

    sellerOrders

} = require("../controllers/SellerController");

// Seller Profile
router.get(
    "/profile",
    protect,
    authorize("seller"),
    sellerProfile
);

// My Books
router.get(
    "/books",
    protect,
    authorize("seller"),
    myBooks
);

// Orders
router.get(
    "/orders",
    protect,
    authorize("seller"),
    sellerOrders
);

module.exports = router;