//server API endpoints

const express = require("express");

//recordRoutes is an instance of the express router.
//We use it to define out routes.
//The router will be added as a middleware and will take control of requires starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../config/connection");

//This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

//This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("employee-db")
    db_connect
        .collection("records")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result)
        });
});

//This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myObj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };

    db_connect.collection("records").insertOne(myObj, function (err, res) {
        if(err) throw err;
        response.json(res);
    });
});

//This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function(req, response) {
    let db_connect = dbo.getDb();
    let myQuery = { _id: ObjectId(req.params.id) };
    let newValues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    };

    db_connect
        .collection("records")
        .updateOne(myQuery, newValues, function (err, res) {
            if(err) throw err;
            console.log("1 document updated");
            response.json(res)
        });
});
    
//This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myQuery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myQuery, function (err, obj) {
        if(err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = recordRoutes