const Book = require("../models/Book");

// Add Book
const addBook = async (req,res)=>{
    try{

        const book = await Book.create(req.body);

        res.status(201).json({
            success:true,
            message:"Book Added Successfully",
            book
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};

// Get All Books
const getBooks = async(req,res)=>{

    try{

        const books = await Book.find();

        res.status(200).json({
            success:true,
            count:books.length,
            books
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports={
    addBook,
    getBooks
};