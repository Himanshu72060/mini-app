const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const loginSchema = new Schema({

    email: { type: String, required: true },
    password: { type: Number, required: true }

});
module.exports = Model("login", loginSchema);