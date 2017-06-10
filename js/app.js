//Notes
let notes = sessionStorage.getItem("notes");

if( !notes ) {
    sessionStorage.setItem("notes", JSON.stringify([]));
    notes = sessionStorage.getItem("notes");
}
notes = JSON.parse(notes);


//Hanldebars note template
$(function () {
    function displayNotes() {

        let templateScript = $("#note-item").html();
        let handlebarTemplate = Handlebars.compile(templateScript);
        let context = {
            notes
        };
        let compiledHtml = handlebarTemplate(context);
        $('.notes-container').html(compiledHtml);
    }
    displayNotes();

    //Sort Order while change li element
    $( ".sortOrder li" ).click(function() {
        if( 'sortByDueDate' === $( this ).attr('id')) {
            notes.sort(sortFunctions.sortByDueDate );
        } else if ( 'sortByCreationDate' === $( this ).attr('id')){
            notes.sort(sortFunctions.sortByCreationDate );
        }
        displayNotes();
    });
});

//Sort functions
let sortFunctions = {
    'sortByDueDate' : function(a, b) {
        let dueDate1 = new Date(a.dueDate),
            dueDate2 = new Date(b.dueDate);
        return dueDate1 - dueDate2;
    },
    'sortByCreationDate' : function(a, b) {
        let creationDate1 = new Date(a.creationDate),
            creationDate2 = new Date(b.creationDate);
        return creationDate1 - creationDate2;
    }
};

//Style changer
function onStyleChanged() {
    let selectedStyle = $("#styleswitcher").val();
    activateStyle(selectedStyle);
    setActiveStyle(selectedStyle);
}

// Delete note item
function deleteNoteItem(e, item) {
    e.preventDefault();
    $(item).closest("div.note-item").remove();
}

//Delete Note item
$(".note-item").on('click', '.btn-delete', function(e){
    var item = this;
    deleteNoteItem(e, item)
});