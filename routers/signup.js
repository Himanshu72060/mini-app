const express = require("express");
const schema = require("../models/schema/signup_schema")
const jwt = require("jsonwebtoken");

// signup api 
module.exports = async (req, res) => {
    const email = await schema.find({ email: req.body.email })
    if (email.length === 0) {
        const signUpDetails = await new schema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email
        });

        const signUpDetailsSave = await signUpDetails.save();
        console.log(signUpDetailsSave, "signUpDetailsSave")
        // token 
        const token = jwt.sign(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                userName: req.body.userName,
            },
            "secretkey",
            { expiresIn: "24h" })
        console.log(token, "token")
        return res.status(200).json({
            message: "data saved succesfully nd token is generated",
            data: signUpDetailsSave,
            token: token,
        });
    } else {
        return res.json({
            msg: "email alredy exists"
        });
    }
};


