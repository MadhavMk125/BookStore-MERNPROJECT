const Review = require("../models/Review");
const Book = require("../models/Book");

// Add Review

const addReview = async(req,res)=>{

    try{

        const {

            book,
            rating,
            comment

        } = req.body;

        const alreadyReviewed = await Review.findOne({

            user:req.user._id,

            book

        });

        if(alreadyReviewed){

            return res.status(400).json({

                success:false,

                message:"You Already Reviewed This Book"

            });

        }

        const review = await Review.create({

            user:req.user._id,

            book,

            rating,

            comment

        });

        const reviews = await Review.find({book});

        const avgRating =

            reviews.reduce((acc,item)=>acc+item.rating,0)

            / reviews.length;

        await Book.findByIdAndUpdate(book,{

            rating:avgRating,

            numReviews:reviews.length

        });

        res.status(201).json({

            success:true,

            message:"Review Added Successfully",

            review

        });

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

// Get Reviews

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

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

// Delete Review

const deleteReview = async(req,res)=>{

    try{

        const review = await Review.findById(req.params.id);

        if(!review){

            return res.status(404).json({

                success:false,

                message:"Review Not Found"

            });

        }
        await review.deleteOne();
        res.status(200).json({
            success:true,
            message:"Review Deleted Successfully"
        });
    }
    catch(error){
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