//Connecting route to notes 

const fs = require("fs");
const db = require("../db/db.json");

module.exports = function (app) {

// GET request 

app.get("/api/notes", function(req, res) {
    fs.readFile("db/db.json", function(err,data) {
        if(err) throw err; 
        let notes = JSON.parse(data);
        return res.json(notes);
    });
}); 

//new note POST 
app.post("/api/notes", function (req, res) {
    fs.readFile("db/db.json", function(err, data) {
        if (err) throw err;
        let notes = JSON.parse(data);
        const newNote {
            title: req.body.title,
            text: req.body.text,
        };

    }
