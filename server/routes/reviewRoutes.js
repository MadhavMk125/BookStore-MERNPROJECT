const express = require("express");

const router = express.Router();

const {

    addReview,
    getReviews,
    deleteReview

} = require("../controllers/ReviewController");

const protect = require("../middlewares/authMiddleware");

router.post("/add",protect,addReview);

router.get("/:bookId",getReviews);

router.delete("/delete/:id",protect,deleteReview);

module.exports = router;