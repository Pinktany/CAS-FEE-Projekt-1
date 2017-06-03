// Add new note to session Storage
let notes = sessionStorage.getItem("notesArray");
if( !notes )
{
    sessionStorage.setItem("notesArray", JSON.stringify([]));
    notes = sessionStorage.getItem("notesArray");
}
notes = JSON.parse(notes);


// Count Notes Elements
document.getElementById("numberOfElements").innerText = "Elemente: " + notes.length;


// Add new note to div
if( notes.length === 0 ) {
  document.getElementById("notes").innerHTML =  "Keine Notizen";
} else {
    let key = "";
    let list = "";
    for (let i = 0; i <= notes.length - 1; i++) {
  	   value = notes[i];
       list += "<div class='note-item'><p>" + value['title'] + "</p>\n<p>" + value['description'] + "</p>\n<p>" + value['dueDate'] + "</p></div>\n";
		}
    document.getElementById("notes").innerHTML = list;
  }

// Helper sort function
function displayList(notes) {
    let NotesList = "";
    notes.forEach(function (e) {
        NotesList += "<div class='note-item'><p>" + e.title + "</p>\n<p>" + e.description + "</p>\n<p>" + e.dueDate + "</p>\n<p>" + e.creationDate + "</p></div>\n";
    });
    return NotesList;
}

// Sort by duedate
notes.sort(function (a, b) {
    let dueDate1 = new Date(a.dueDate),
        dueDate2 = new Date(b.dueDate);
    return dueDate1 - dueDate2;
});

displayList(notes);

// Sort Order by creation date
notes.sort(function (x, y) {
    let creationDate1 = new Date(x.creationDate),
        creationDate2 = new Date(y.creationDate);
    return creationDate1 - creationDate2;
});
displayList(notes);





// Sort Order by duedate while change select element
$( ".sortOrder" ).change(function() {
  document.getElementById("notes").innerHTML = displayList(notes);
});



// Make Notes Div clickable
$('.note-item').on('click', function() {
  $('.note-item').removeClass('active');
  $(this).addClass('active');
});

function onStyleChanged() {
    let selectedStyle = $("#styleswitcher").val();
    activateStyle(selectedStyle);
    setActiveStyle(selectedStyle);
}
