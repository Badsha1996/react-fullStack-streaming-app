const router = require("express").Router();
const List = require("../models/List");
const verify = require("../varification")

// CREATE METHOD 
router.post("/", verify ,async(req, res)=>{
    if(req.user.isAdmin){
        // new movie 
        const newList =  new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed to Add anything")
    }
})

// DELETE METHOD
router.delete("/:id", verify ,async(req, res)=>{
    if(req.user.isAdmin){
        try {
            await List.findByIdAndDelete(req.params.id)
            res.status(201).json("The list has been deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed")
    }
})

// FIND ALL MOVIES 
router.get("/", verify ,async(req, res)=>{
    // localhost:8800/api/lists?type=movie&genre=action
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [] ;
    try {
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate(
                    [
                        {$sample : {size :  10}},
                        { $match  : {type : typeQuery, genre : genreQuery}}
                    ]
                )
            }else{
                list = await List.aggregate(
                    [
                        {$sample : {size :  10}},
                    {$match : {type: typeQuery}}
                       
                    ]
                )
            }
        }else{
            list = await List.aggregate([{$sample : {size : 10}}])
        }
        res.status(201).json(list)
    } catch (error) {
        res.status(500).json(error)
    }

})
module.exports = router;