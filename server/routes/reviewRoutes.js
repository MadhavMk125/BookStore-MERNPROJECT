const express=require("express");

const router=express.Router();

const{

addReview,
getReviews,
deleteReview

}=require("../controllers/ReviewController");

router.post("/add",addReview);

router.get("/:bookId",getReviews);

router.delete("/delete/:id",deleteReview);

module.exports=router;