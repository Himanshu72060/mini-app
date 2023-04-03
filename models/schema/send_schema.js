const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const reqsend = new Schema({
    sendTo: { type: String },
    sendBy: { type: String }
});
module.exports = Model("reqsend", reqsend);