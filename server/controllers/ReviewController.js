const Review = require("../models/Review");

// Add Review
const addReview = async (req,res)=>{

    try{

        const review = await Review.create(req.body);

        res.status(201).json({
            success:true,
            message:"Review Added Successfully",
            review
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Get Reviews of a Book

const getReviews = async(req,res)=>{

    try{

        const reviews = await Review.find({
            book:req.params.bookId
        }).populate("user","name");

        res.status(200).json({
            success:true,
            count:reviews.length,
            reviews
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Delete Review

const deleteReview = async(req,res)=>{

    try{

        const review = await Review.findByIdAndDelete(req.params.id);

        if(!review){

            return res.status(404).json({
                success:false,
                message:"Review Not Found"
            });

        }

        res.status(200).json({
            success:true,
            message:"Review Deleted Successfully"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports={
    addReview,
    getReviews,
    deleteReview
};