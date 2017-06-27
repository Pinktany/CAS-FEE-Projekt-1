"use strict";

function displayNotes() {

    const templateScript = $("#note-item").html(),
        handlebarTemplate = Handlebars.compile(templateScript),
        context = {
            notes: noteStorage.notes
        },
        compiledHtml = handlebarTemplate(context);
    $('.notes-container').html(compiledHtml);
}

displayNotes();


function showCompletedNoteItems() {

    const templateScript = $('#completed-notes').html(),
        handlebarTemplate = Handlebars.compile(templateScript),
        context = {
            notes: noteStorage.notes
        },
        compiledHtml = handlebarTemplate(context);
    $('.notes-container').html(compiledHtml);
}