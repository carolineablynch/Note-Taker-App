//Connecting route to notes 

const fs = require("fs");
const db = require("../db/db.json");
const UUID = require("uuid");

module.exports = function (app) {

// GET request 

    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

//new note POST 

app.post("/api/notes", function (req, res) {
    let noteId = uuid();
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
    };

fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    
    const allNotes = JSON.parse(data);

    allNotes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
        if (err) throw err;
        res.json(db);
        console.log("your note was created")
        });
    });
});

app.delete("/api/notes:id", (req, res) => {

    let noteId = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        const allNotes = JSON.parse(data);
        const newAllnotes = allNotes.filter(note => note.id != noteId); 

        fs.writeFile("./db/db.json", JSON.stringify(newAllnotes, null, 2), err => {
            if (err) throw err;
            res.json(db);
            console.log("your note was deleted")
        });
    });
});
};
