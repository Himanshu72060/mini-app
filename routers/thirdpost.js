
const schema = require("../models/schema/third_schema");

module.exports = async (req, res) => {
    try {
        const uplaod = await new schema({
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