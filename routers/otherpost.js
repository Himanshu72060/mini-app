const express = require("express");
const router = express.Router();
const multer = require("multer");
const schema = require("../models/schema/otherpost_schema");

const post = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "otherpostupload")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("other_post")

const otherpost = (post, async (req, res) => {
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
        image
    })
});
module.exports = otherpost;