const express = require("express");

const router = express.Router();

const login = require("./login");
const signup = require("./signup");
const getapi = require("./getapi");
const jwttoken = require("./jwt");
const mypost = require("./mypost");
const otherpost = require("./otherpost");
const thirdpost = require("./thirdpost");
const postimage = require("./getmypost");
const otherimage = require("./getotherpost");
const thirdimage = require("./getthirdpost");
const userupdate = require("./user_update");

router.post("/login", login);
router.post("/signup", signup);
router.get("/getapi", jwttoken, getapi);
router.post("/mypost", jwttoken, mypost);
router.post("/otherpost", otherpost);
router.post("/thirdpost", thirdpost);
router.get("/postimage", postimage);
router.get("/otherimage", otherimage);
router.get("/thirdimage", thirdimage);
router.post("/userupdate/:_id", userupdate);



module.exports = router;