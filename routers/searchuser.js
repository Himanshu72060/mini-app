const schema = require("../models/schema/signup_schema");

module.exports = async (req, res) => {
    try {
        const { searchValue } = req.params;
        const query = searchValue.split(" ");

        const searchusers = await schema.find({
            $or: [
                { firstName: { $regex: query.length > 1 ? query[0] : searchValue } },
                { lastName: { $regex: query.length > 1 ? query[1] : searchValue } },
            ],
        });
        return res.status(200).json({
            success: true,
            message: "search user successfully",
            userList: searchusers,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
