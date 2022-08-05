const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./.env"});
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//get driver connection
const dbo = require("./config/connection")

app.listen(PORT, () => {
    //perform a db connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.log(err)
    })

    console.log(`Server is running on port: ${PORT}`);
});