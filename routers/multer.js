



const multer = require("multer");
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, "uploads");
        },
        filename: function (req, res, cb) {
            cb(null, "-" + Date.now() + ".jpg");
        },
    }),
}).single("third_file");
module.exports = upload;