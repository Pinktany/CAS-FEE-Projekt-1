"use strict";

let noteStorage = (function () {

    //Notes
    let notes = localStorage.getItem("notes");

    if (!notes) {
        localStorage.setItem("notes", JSON.stringify([]));
        notes = localStorage.getItem("notes");
    }
    notes = JSON.parse(notes);



    //Delete note item
    function deleteNoteItem(id) {
        let index = notes.indexOf(notes.filter(x => x.id === id)[0]);
        if (index > -1) {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    }

    //Complete note item
    function completeNoteItem(id) {
        let index = notes.indexOf(notes.filter(x => x.id === id)[0]);
        if (index > -1) {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    }

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
        },
        'sortByImportance' : function(b, a) {
            let importance1 = new Date(b.importance),
                importance2 = new Date(a.importance);
            return importance1 - importance2;
        }
    };

    //Sort algo
    function sortBy(sortAlg) {
        notes.sort(sortFunctions[sortAlg]);
    }

    //Show completed note items
    function showCompleted() {
        showCompletedNoteItems();
    }

    return{
        notes,
        sortBy,
        showCompleted,
        deleteNoteItem,
        completeNoteItem,
        showCompleted
    };
}());