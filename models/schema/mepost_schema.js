const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;


const mypost = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String, required: true },
    comments: { type: String, required: true },
    likes: { type: Number },
    dislikes: { type: Number }
});
module.exports = Model("mypost", mypost);