const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);// localhost:5000/books

mongoose.connect("mongodb+srv://Tariq_Husain_Khan:7STAR%40coder@cluster0.wrek9ab.mongodb.net/book-store?retryWrites=true&w=majority")
    .then(()=> console.log("Connected To Database and Listening at PORT 5000"))
    .then(()=>{
        app.listen(5000)
      }).catch((err)=>console.log(err));
