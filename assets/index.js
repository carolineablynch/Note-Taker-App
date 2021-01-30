const $noteTitle = $(".note-title");
const $noteBody = $(".note-body");
const $saveBtn = $(".saveBtn");
const $newBtn = $(".newBtn");
const $noteList = $(".list-container .list-group");

let activeNote = {};

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

//function to display ongoing note or not if there is no ongoing note
const activeNote = () => {
    $saveBtn.hide();

    if (activeNote.id) {
        $noteTitle.attr("readonly", true);
        $noteBody.attr("readonly", true);
        $noteTitle.val(activeNote.title);
        $noteBody.val(activeNote.text);
    } else {
        $noteTitle.attr("readonly", false);
        $noteBody.attr("readonly", false);
        $noteTitle.val("");
        $noteBody.val("");
    }
};

//save note 
const noteSave = function () {
    const newNote = {
        title: $noteTitle.val();
        body: $noteBody.val();
    };

    saveNote(newNote).then(() => {
        getAndRenderNotes();
        activeNote();
    });
};

const DeleteNoteAction = function (event) {
    const note =$(this).parent(".list-group-item").data();

    if (activeNote.id === note.id) {
        activeNote = {};
    }

    deleteNote(note.id).then(() => {
        getAndRenderNotes();
        activeNote();
    });
};

const handleCurrentNote = function () {



}