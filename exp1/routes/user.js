const express = require('express');
const User = require("../models/user");

const router = express.Router();


router.post("/register", async (req, res)=>{
    const username = req.body["username"];
    const password = req.body["password"];

    if(username && password){
        return res.send(await User.insertOne({
            username,password
        }))
    }

    res.send({message: "Enter all fields"});
})

router.post("/login", async (req, res)=>{
    const {username, password} = req.body;
    const userData = await User.findOne({username, password});

    if(!userData){
        return res.send({
            msg: "Invalid Login!"
        })
    }

    return res.send({
        msg: "Login success",
        username
    });

})

module.exports = router;
