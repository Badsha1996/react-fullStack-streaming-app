const router = require("express").Router();
const User = require("../models/User");
const CryptoJS =  require("crypto-js");
const verify = require("../varification")

// UPDATE METHOD 
router.put("/:id", verify ,async(req, res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body},
            {new : true});
            res.status(201).json(updatedUser)
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed to change the password")
    }
})

// DELETE METHOD
router.delete("/:id", verify ,async(req, res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
           await User.findByIdAndDelete(req.params.id)
           res.status(201).json("User Deleted")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed to delete")
    }
})

// FIND USER 
router.get("/find/:id", verify ,async(req, res)=>{
        try{
            const user = await User.findById(req.params.id);
            const {password, ...info} = user._doc;
            res.status(201).json(info)
        }catch(err){
            res.status(500).json(err)
        }
    
})

// FIND ALL USER
router.get("/", verify ,async(req, res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
           const users = query ? await User.find().limit(10) : await User.find();
           res.status(201).json(users)
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("Only Admins are allowed")
    }
})
module.exports = router;