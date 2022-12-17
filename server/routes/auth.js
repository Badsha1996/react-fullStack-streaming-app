const router = require("express").Router();
const User = require("../models/User");

// REGISTER USER FROM SIGN UP
router.post("/register", async(req, res) => {
    const newUser =  new User({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    })

    try {
        const user =  await newUser.save()// javascript object notation;
        res.status(201).json(user); 
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
    
})

module.exports = router;
