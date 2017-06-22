//Hanldebars note template
$(function () {
    function displayNotes() {

        let templateScript = $("#note-item").html();
        let handlebarTemplate = Handlebars.compile(templateScript);
        let context = {
            notes: noty.noteStorage.notes
        };
        let compiledHtml = handlebarTemplate(context);
        $('.notes-container').html(compiledHtml);
    }
    displayNotes();

    //Sort Order while change li element
    $( ".sortOrder li" ).click(function() {
        noty.noteStorage.sortBy($( this ).attr('id'));
        displayNotes();
    });

    //Delete Note item
    $(".note-item").on('click', '.btn-delete', (event) => {
        noty.noteStorage.deleteNoteItem($(event.currentTarget).data("noteid"));
        displayNotes();
    });

});

//Style changer
function onStyleChanged() {
    let selectedStyle = $("#styleswitcher").val();
    activateStyle(selectedStyle);
    setActiveStyle(selectedStyle);
};
