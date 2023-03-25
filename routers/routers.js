const express = require("express");

const router = express.Router();

const login = require("./login");
const signup = require("./signup");
const getapi = require("./getapi");
const jwttoken = require("./jwt");
const mypost = require("./mypost");
const otherpost = require("./otherpost");

router.post("/login", login);
router.post("/signup", signup);
router.get("/getapi", jwttoken, getapi);
router.post("/mypost", jwttoken, mypost);
router.post("/otherpost", jwttoken, otherpost);



module.exports = router;