"use strict";

(function ($) {
    const rest = window.services.restClient;

    if (window.location.hash) {

        let id = 0;
        const note = rest.getNoteById(window.location.hash.substr(1)).done(function (note) {
            $("#title").val(note.title);
            $("#description").val(note.description);
            $("#dueDate").val(note.dueDate);
            $("#importance").val(note.importance);
        });

        //Edit note item
        $(document).on("click", ".btn_edit", function () {
            editNote();
        });

        //Save note
        $("#saveNote").click(function() {
            if (id === 0) {
                rest.addNote(note).then(() =>{
                    window.location.replace("index.html");
                });
            } else {
                rest.editNote(note);
            }

        });
    }

    //Styleswitcher
    function getDefaultStyle() {
        activateStyle(getDefaultStyle());
    }
}(jQuery));