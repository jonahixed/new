const express = require('express');
const User = require('../Models/userModel');
const router = express.Router();

router.post("/signup", async(req, res, next) => {

    let { firstName, lastName, email, password } = req.body;

    const checkEmail = await User.findOne({ email })

    
    if (checkEmail) {
        return res.json({
            status: "failed",
            message: "Email already Exist"
        })
    }

    const newUser = { firstName, lastName, email, password };
    const createUser = await User.create(newUser);

    res.status(201).json({
        status: "success",
        data: {
          id: createUser._id,
          firstName: createUser.firstName,
          lastName: createUser.lastName,
          email: createUser.email
        },


      });

    console.log(req.body)
    res.send ()
});


module.exports = router