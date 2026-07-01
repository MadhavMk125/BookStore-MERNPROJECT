const express = require("express");

const router = express.Router();

const {
    placeOrder,
    getMyOrders,
    getSingleOrder,
    cancelOrder,
    getAllOrders,
    updateOrderStatus
} = require("../controllers/OrderController");

const protect = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

// ================= USER =================

// Place Order
router.post(
    "/place",
    protect,
    authorize("user", "seller", "admin"),
    placeOrder
);

// My Orders
router.get(
    "/myorders",
    protect,
    authorize("user", "seller", "admin"),
    getMyOrders
);

// Single Order
router.get(
    "/:id",
    protect,
    authorize("user", "seller", "admin"),
    getSingleOrder
);

// Cancel Order
router.put(
    "/cancel/:id",
    protect,
    authorize("user", "seller", "admin"),
    cancelOrder
);

// ================= ADMIN =================

// All Orders
router.get(
    "/admin/all",
    protect,
    authorize("admin"),
    getAllOrders
);

// Update Order Status
router.put(
    "/admin/update/:id",
    protect,
    authorize("admin"),
    updateOrderStatus
);

module.exports = router;