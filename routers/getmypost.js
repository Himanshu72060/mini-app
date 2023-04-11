const express = require("express");
const router = express.Router();
const schema = require("../models/schema/mepost_schema");
module.exports = async (req, res) => {
    // const oldschema = await schema.find()


    // pagination 
    let page = req.query.page;
    let limit = req.query.limit
    let skip = (page - 1) * 3;
    const oldschema = await schema.find().skip(skip).limit(limit);

    return res.json({
        msg: "data get",
        data: oldschema
    })
    // return res.json({ newschema })
    // return res.status(200).json({ message: "done" });

};

