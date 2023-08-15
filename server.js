const express = require("express") // import express
const app= express();
const mongoose = require("mongoose")//import mongoose
require("dotenv").config() // Load ENV Variables
const expressLayouts = require("express-ejs-layouts");
const authRoutes =require("./controllers/authController")
const session = require("express-session")


app.set("view engine", "ejs");


//middlewares 
app.use(express.static("public"));
app.use(expressLayouts);
// Use the session middleware
app.use(session({ secret: 'randomhhskkskkskkskk', cookie: { maxAge: 3600000 }}))



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




// anywhere below middlewares
app.use(authRoutes);

app.get("/", (req, res) => {
  res.render("home.ejs")
});


// define our own middle to check for a loggin user
// if no user go to login screen
app.use((req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
    return;
  }

  next();
});







app.get("/product", (req,res) =>{
  res.render("product/index.ejs")
})



  





//port setup 
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now server is listening on Port : ${PORT}`))