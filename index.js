const mongoose = require("mongoose");
const routers = require("./routers/routers");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/app", routers);

// mongodb connection...
mongoose.connect("mongodb+srv://miniapp:miniapp1@cluster0.cbxgd6u.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(() => {
        console.log("connected....");
        app.listen(6000);
    })
    .catch((err) => {
        console.log("failed", err);
    });