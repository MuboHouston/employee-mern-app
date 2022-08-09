const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./.env"});
const PORT = process.env.PORT || 5000;
const path = require ('path');

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//get driver connection
const dbo = require("./config/connection")

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    });
}

app.listen(PORT, () => {
    //perform a db connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.log(err)
    })

    console.log(`Server is running on port: ${PORT}`);
});