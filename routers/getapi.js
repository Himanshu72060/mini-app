const express = require("express");
const schema = require("../models/schema/signup_schema");

module.exports = async (req, res) => {
    const getdata = await schema.find()
    return res.json({
        msg: "hm",
        getdata
    })
}
