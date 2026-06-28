const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/connect");
const userRoutes=require("./routes/userRoutes");
const bookRoutes=require("./routes/bookRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/books",bookRoutes);

app.get("/", (req, res) => {
    res.send("BookStore Backend Running Successfully");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});