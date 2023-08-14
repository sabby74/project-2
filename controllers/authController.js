// using express router to attach routes and export them
const express = require("express");
const router = express.Router();
const User = require("../models/user")


router.get("/login", (req,res)=>{
    res.render("auth/login")
  })
  
  
router.post("/login",async (req,res) =>{
    console.log(req.body);
    let userToLogin = await User.findOne({username: req.body.username })
    //just to compare the passwords entered with req.body
    if(userToLogin){
      if(userToLogin.password === req.body.password){
        res.send('you are logged in')
      }else{
        res.send("incorrect password")
      }
    }
    
  })
  
  
  router.post("/signup",async (req,res) =>{
    console.log(req.body);
    if(req.body.username && req.body.password){
    let newUser = await User.create(req.body)
    res.send(newUser) 
    }
    
  })
  
  
  router.get("/signup", (req,res)=>{
    res.render("auth/signup")
  })
  


module.exports= router