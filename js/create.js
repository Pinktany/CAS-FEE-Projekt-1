"use strict";

let notesContainer = (function() {
   let notes = [];
   function addNewNote(title, description, dueDate, importance) {

        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        let creationDate = moment().format('YYYY-MM-DD');
        let newNote = {
            'title': title,
            'description': description,
            'dueDate': dueDate,
            'creationDate': creationDate,
            'importance': $('select[name=importance]').val(),
            'id': Math.floor(Math.random() * 10000)
        };

        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        return newNote;
    }

   return {
       addNewNote: addNewNote
   }
})();

$('#saveNote' ).click(function() {
    notesContainer.addNewNote($("#title").val(), $("#description").val(), $("#dueDate").val(), $("#creationDate").val(), $("#importance").val());
    window.location.replace("app.html");
});

//Styleswitcher
function getDefaultStyle() {
    activateStyle(getDefaultStyle());
}