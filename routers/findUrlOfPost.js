module.exports = async (req, res) => {
    return res.json({
        msg: "done",
        filename: req.file.filename
    })
};