const express = require("express");
const router = express.Router();
const schema = require("../models/schema/otherpost_schema");

module.exports = async (req, res) => {
    const oldschema = await schema.find();
    console.log(oldschema, "oldschema")
    return res.json({
        msg: "data get",
        data: oldschema
    })
    return res.json({ newschema })
    return res.status(200).json({ message: "done" });

};

