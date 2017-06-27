$(function () {
    "use strict";

    //Sort Order while change li element
    $('.sortOrder li' ).click(function() {
        noteStorage.sortBy($( this ).attr('id'));
        displayNotes();
    });

    //Delete Note item
    $('.note-item').on('click', '.btn-delete', (event) => {
        noteStorage.deleteNoteItem($(event.currentTarget).data('noteid'));
        displayNotes();
    });

    //Complete note item
    $(document).on('click', '.finished', (event) => {
        noteStorage.completeNoteItem($(event.currentTarget).data('noteid'));
        displayNotes()
    });

    //Show completed note items
    $(document).on('click', '#showFinished', (event) => {
        noteStorage.showCompleted($(event.currentTarget).data('noteid'));
        displayNotes();
    });

    //Style changer
    function onStyleChanged() {
        let selectedStyle = $('#styleSwitcher').val();
        activateStyle(selectedStyle);
        setActiveStyle(selectedStyle);
    };

});