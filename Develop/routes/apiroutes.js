//Connecting route to notes 

const fs = require("fs");
const db = require("../db/db.json");
const ID = require("ID"); 

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
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: ID.generate()
        };

    console.log(db)
    notes.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), (err) => {
        if(err) throw err;
        res.send("200");
        })
    });
});

app.delete("/api/notes/:id", function (req, res) {
    fs.readFile("db/db.json", function(err, data) {
        const deleteNote = req.params.id;
        if(err) throw err;
        let notes = JSON.parse(data);
        for (let i=0; i < notes.length; i++) {
            if(notes[i].id === deleteNote){
                notes.splice(i, 1);
            };
        };
    fs.writeFile("db/db.json", JSON.stringify(notes, null, 2), (err) => {
        if(err) throw err;
        res.send('200');
        });
    });
    });
};


