const express = require("express");
const schema = require("../models/schema/signup_schema")

const userupdate = async (req, res) => {
    const userupdate = await schema.findByIdAndUpdate(
        { _id: req.params._id },
        {
            $set: {
                city: req.body.city,
                bio: req.body.bio,
                country: req.body.country,
            },
        }
    );
    return res.json({
        data: userupdate,
        msg: "updated succesfully",
    });
};

module.exports = userupdate;