const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
    const verifyToken = req.headers["token"];
    const useToken = verifyToken.split(" ");
    const token = useToken[0];
    console.log(token);
    await jwt.verify(
        token, "dfghjkl", (err, payload) => {
            if (err) {
                console.log(err, "err")
                return res.json({
                    success: false,
                    msg: "token is expired",
                });
            }
            req.payload = payload;
            next();
        });
};



