"use strict";

(function ($) {
    const rest = window.services.restClient;

    if (window.location.hash) {

        const id = window.location.hash.substr(1);
        const index = notes.findIndex(x => x.id === id);

        $("#title").val(notes[index].title);
        $("#description").val(notes[index].description);
        $("#dueDate").val(notes[index].dueDate);
        $("#importance").val(notes[index].importance);
    }

    //Edit note item
    $(document).on("click", ".btn_edit", function () {
        editNote(note_id);
    });

    //Edit note item
    function editNote() {
        rest.editNote($("#title").val(), $("#description").val(), $("#importance").val(), $("#dueDate").val());
    }

    //Save note
    $("#saveNote").click(function() {
        rest.addNote($("#title").val(), $("#description").val(), $("#importance").val(), $("#dueDate").val()).then(() =>{
            window.location.replace("index.html");
        } );
    });

    //Styleswitcher
    function getDefaultStyle() {
        activateStyle(getDefaultStyle());
    }
}(jQuery));