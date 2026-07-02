const express = require("express");
const upload=require("../middlewares/upload");
const router = express.Router();

const {
    addBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
    searchBooks,
    getCategoryBooks
} = require("../controllers/BookController");

const protect = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

// Public Routes
router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/category/:category", getCategoryBooks);
router.get("/:id", getBook);

// Protected Routes
router.post(
    "/add",
    protect,
    authorize("seller", "admin"),
    upload.single("image"),
    addBook
);

router.put(
    "/update/:id",
    protect,
    authorize("seller", "admin"),
    updateBook
);

router.delete(
    "/delete/:id",
    protect,
    authorize("seller", "admin"),
    deleteBook
);

module.exports = router;