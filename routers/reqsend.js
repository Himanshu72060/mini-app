const reqschema = require("../models/schema/send_schema");
const schema = require("../models/schema/signup_schema");


module.exports = async (req, res) => {
    let { srchuser } = req.params;

    const searchuser = await schema.find({
        $or: [{ firstName: { $regex: srchuser } }, { email: { $regex: srchuser } }],
    });
    const findId = searchuser[0]._id;
    const Usercheck = await reqschema.find({ sendTo: findId });
    if (Usercheck.length === 0) {

        const sendreq = new reqschema({
            sendBy: req.body.sendBy,
            sendTo: findId,
        });
        const saveData = await sendreq.save();
        return res.json({
            msg: "send req",
            data: saveData,
        })
    }
    else {
        res.json({ msg: "already sent frnd req to this user" });
    };
};
