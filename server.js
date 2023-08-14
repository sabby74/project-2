const express = require("express") // import express
const app= express();
const mongoose = require("mongoose")//import mongoose
require("dotenv").config() // Load ENV Variables
const expressLayouts = require("express-ejs-layouts");
const User =require("./models/user")


app.set("view engine", "ejs");


//middlewares 
app.use(express.static("public"));
app.use(expressLayouts);

//with express.urlencoded we can use form data
app.use(express.urlencoded({ extended: true }));


//================******************************=============================

//             database parser to connect to mongoose DB
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("Now Connected to MongoDb"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

//================******************************=============================



app.get("/", (req, res) => {
    res.render("home.ejs")
  });



app.get("/login", (req,res)=>{
  res.render("auth/login")
})


app.post("/login", (req,res) =>{
  console.log(req.body);
  res.send(req.body)
})


app.post("/signup", (req,res) =>{
  console.log(req.body);
  res.send(req.body)
})


app.get("/signup", (req,res)=>{
  res.render("auth/signup")
})


  





//port setup 
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now server is listening on Port : ${PORT}`))