const postSchema = require("../models/schema/mepost_schema")
module.exports = async (req, res) => {
    try {
        const uplaod = await new postSchema({
            image: req.body.image,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            comments: req.body.comments,
        });
        const savePost = uplaod.save();
        console.log(savePost);
        return res.json({
            msg: "post uploaded successfully",
            data: uplaod,
        });
    } catch (err) {
        return res.json({
            msg: "error",
            err,
        });
    }
};