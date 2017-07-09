"use strict";

(function ($) {
    const rest = window.services.restClient;
    let id = 0;

    if (window.location.hash) {
        id = window.location.hash.substr(1);
        const note = rest.getNoteById(id).done(function (note) {
            $("#title").val(note.title);
            $("#description").val(note.description);
            $("#dueDate").val(note.dueDate);
            $("#importance").val(note.importance);
        });
    }

    //Edit note item
    $(document).on("click", ".btn_edit", function () {
            editNote();
    });

    //Save note
    $("#saveNote").click(function() {
        if (id === 0) {
            console.log('save');
            rest.addNote($("#title").val(), $("#description").val(), $("#importance").val(), $("#dueDate").val()).then(() =>{
                window.location.replace("index.html");
            })
        } else {
            console.log('edit');
            rest.editNote(id, $("#title").val(), $("#description").val(), $("#importance").val(), $("#dueDate").val());
                window.location.replace("index.html");
        }
    });

    //Styleswitcher
    function getDefaultStyle() {
        activateStyle(getDefaultStyle());
    }
}(jQuery));