const frndreqsend = require("../models/schema/send_schema");

const getreqsend = async (req, res) => {
    const frndreq = await getreqsend.findById({ _id: req.params._id });
    return res.json({
        msg: "find ur frnd req",
        data: frndreq,
    });
};
module.exports = getreqsend