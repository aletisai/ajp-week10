const express = require('express');
const mongoose = require('mongoose');
const AuthRoutes = require("./routes/user");

const app = express();

mongoose.connect("mongodb://localhost:27017/sai").then(()=>{
    console.log("Mongodb conn established");
})

app.use(express.json());

app.use("/", AuthRoutes);

app.listen(8000, ()=>{
    console.log("Server running at http://localhost:8000");
})

