"use strict";

(function ($) {
    const rest = window.services.restClient;
    const handlebars = window.services.handlebarService;
    let note_id;

    $(function () {

        const templateScript = $("#note-item").html(),
            handlebarTemplate = Handlebars.compile(templateScript);

        let orderBy = "sortByDueDate";
        let filter = false;

        function displayNotes() {
            rest.getAllNotes(orderBy, undefined, filter ? "finished" : "").then((notes) => {
                const context = {
                        notes: notes ,
                    },
                    compiledHtml = handlebarTemplate(context);
                $(".notes-container").html(compiledHtml);
            })

        }

        //Sort order while change li element
        $(".sortOrder li" ).click(function() {
            orderBy = $( this ).attr("id");
            displayNotes();
        });

        //Finish note item
        $(document).on("click", ".finished",function () {
            note_id = $(this).parents(".note-item").attr("id");
            finishNote(note_id);
            displayNotes();
        });

        //Show finished note items
        $(document).on('click', '#showFinished', (event) => {
            filter = !filter;
            displayNotes();
        });

        //Delete note item
        $(document).on("click", ".btn-delete", (event) => {
            rest.deleteNote($(event.currentTarget).data("noteid"));
            displayNotes();
        });

        displayNotes();

    });

    //Sort functions
    let sortFunctions = {
        'sortByDueDate': function (a, b) {
            let dueDate1 = new Date(a.dueDate),
                dueDate2 = new Date(b.dueDate);
            return dueDate1 - dueDate2;
        },
        'sortByCreationDate': function (a, b) {
            let creationDate1 = new Date(a.creationDate),
                creationDate2 = new Date(b.creationDate);
            return creationDate1 - creationDate2;
        },
        'sortByImportance': function (b, a) {
            let importance1 = new Date(b.importance),
                importance2 = new Date(a.importance);
            return importance1 - importance2;
        }
    };

    //Sort algo
    function sortBy(sortAlg) {
        notes.sort(sortFunctions[sortAlg]);
    }

    //Finish note item
    function finishNote() {
        rest.finishNote(note_id);
    }

    //Delete note item
    function deleteNoteItem(id) {
        let index = notes.indexOf(notes.filter(x => x.id === id)[0]);
        if (index > -1) {
            notes.splice(index, 1);
        }
    }

    //Styleswitcher
    function onStyleChanged() {
        let selectedStyle = $("#styleSwitcher").val();
        activateStyle(selectedStyle);
        setActiveStyle(selectedStyle);
    }

    return {
        deleteNoteItem,
        sortBy,
        onStyleChanged,
        finishNote,
    };

}(jQuery));