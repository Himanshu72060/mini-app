const express = require("express");
const router = express.Router();
const schema = require("../models/schema/login_schema");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const data = await schema.find({ email: req.body.email });
    if (data.length !== 0) {
        if (data[0].password === req.body.password) {
            console.log(data, "login id");
            // return res.status(200).json({ message: "done" });
            const token = jwt.sign(
                {

                    email: req.body.email,
                    password: req.body.password,
                },
                "secretkey",
                { expiresIn: "24h" })
            console.log(token, "token")
            return res.status(200).json({
                message: "data saved succesfully nd token is generated",
                data: data,
                token: token,
            });
        } else {
            res.json({ massage: "wrong password " });
        }

    } else {
        return res.json({
            massage: "user not found",
        });
    }
};


module.exports = login;
