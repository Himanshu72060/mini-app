const reqschema = require("../models/schema/send_schema");
const schema = require("../models/schema/signup_schema");


const reqsend = async (req, res) => {
    let { srchuser } = req.params;
    const searchuser = await schema.find({
        $or: [{ firstName: { $regex: srchuser } }, { email: { $regex: srchuser } }],
    });
    console.log(searchuser[0]._id, "ll");
    if (searchuser.length !== 0) {
        const findId = searchuser[0]._id;
        const sendreq = new reqschema({
            sendBy: req.body.sendBy,
            sendTo: findId,
        })
        if (searchuser.length === 0) {
            searchuser[0]
        }
        else {
            return res.json({
                msg: "cansal req"
            })
        }
        const saveData = await sendreq.save();
        return res.json({
            msg: "send req",
            data: saveData,
        })
    }

};
module.exports = reqsend;


