const express = require("express");
const router = express.Router();
const multer = require("multer");
const schema = require("../models/schema/mypost_schema");

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "mypostupload")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("my_post")

const mypost = (upload, async (req, res) => {
    const image = await new schema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        image: req.body.image,
        comments: req.body.comments,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    })
    const imagesave = image.save();

    return res.json({
        msg: "done",
        data: image

    })
});



module.exports = mypost;
