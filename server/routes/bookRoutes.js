const express = require("express");

const router = express.Router();

const {

    addBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBooks,
    getBooksByCategory

} = require("../controllers/BookController");

router.post("/add", addBook);

router.get("/", getBooks);

router.get("/search", searchBooks);

router.get("/category/:category", getBooksByCategory);

router.get("/:id", getBookById);

router.put("/update/:id", updateBook);

router.delete("/delete/:id", deleteBook);

module.exports = router;