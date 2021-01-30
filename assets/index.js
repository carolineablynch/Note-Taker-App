const $noteTitle = $(".note-title");
const $noteBody = $(".note-body");
const $saveBtn = $(".saveBtn");
const $newBtn = $(".newBtn");
const $noteList = $(".list-container .list-group");

let currentNote = {};

//function to retrieve notes 
const getNotes = () => {
    return $.ajax({
        url: "/api/notes",
        method: "GET",
    });
};

//function to save notes 
const saveNote = (note) => {
    return $.ajax ({
        url: "/api/notes",
        data: note,
        method: "POST",
    });
};

//function to delete notes
const deleteNote = (id) => {
    return $.ajax ({
        url: "api/notes/" + id,
        method: "DELETE",
    });
};