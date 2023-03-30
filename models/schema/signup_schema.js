const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const signupSchema = new Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: true },
    phoneNumber: { type: Number, require: true },
    userName: { type: String, required: true },
    password: { type: Number, required: true },
    email: { type: String },
    city: { type: String, require: true },
    country: { type: String, require: true },
    bio: { type: String, require: true }
});
module.exports = Model("signup", signupSchema);