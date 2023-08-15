const express = require("express") // import express
const app= express();
const mongoose = require("mongoose")//import mongoose
require("dotenv").config() // Load ENV Variables
const expressLayouts = require("express-ejs-layouts");
const authRoutes =require("./controllers/authController")
const session = require("express-session")
const productRoutes = require("./controllers/productcontroller")


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

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,

};

async function connectToDatabase() {
  try {
    await mongoose.connect(DATABASE_URL, CONFIG);
    console.log('Now Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the async function to connect
connectToDatabase();

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on('open', () => console.log('MongoDB connection opened'))
  .on('close', () => console.log('MongoDB connection closed'))
  .on('error', (error) => console.error('MongoDB connection error:', error));

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

app.use("/product", productRoutes);









  





//port setup 
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now server is listening on Port : ${PORT}`))