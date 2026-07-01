const express=require("express");

const router=express.Router();
const protect = require("../middlewares/authMiddleware");
const{
placeOrder,
getOrders
}=require("../controllers/OrderController");

router.post("/place",protect,placeOrder);

router.get("/",getOrders);

module.exports=router;