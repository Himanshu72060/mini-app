const express = require("express");

const router = express.Router();

const login = require("./login");
const signup = require("./signup");
const getapi = require("./getapi");
const jwttoken = require("./jwt");
const mepost = require("./mepost");
const otherpost = require("./otherpost");
const thirdpost = require("./thirdpost");
const postimage = require("./getmypost");
const otherimage = require("./getotherpost");
const thirdimage = require("./getthirdpost");
const userupdate = require("./user_update");
const searchuser = require("./searchuser");
const reqsend = require("./reqsend");
const getreqsend = require("./getreqsend");
const multer = require("./multer");
const findurlofpost = require("./findUrlOfPost");

router.post("/login", login);
router.post("/signup", signup);
router.get("/getapi", jwttoken, getapi);
router.post("/mepost", mepost);
router.post("/otherpost", otherpost);
router.post("/thirdpost", thirdpost);
router.get("/postimage", postimage);
router.get("/otherimage", otherimage);
router.get("/thirdimage", thirdimage);
router.post("/userupdate/:_id", userupdate);
router.get("/searchuser/:searchValue", searchuser);
router.post("/reqsend/:srchuser", reqsend);
router.get("/getreqsend/:id", getreqsend);
router.post("/url", multer, findurlofpost);



module.exports = router;