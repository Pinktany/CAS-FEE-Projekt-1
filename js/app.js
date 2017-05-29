// Add new note to session Storage
var notes = sessionStorage.getItem("notesArray");
if( !notes )
{
    sessionStorage.setItem("notesArray", JSON.stringify([]));
    notes = sessionStorage.getItem("notesArray");
};
notes = JSON.parse(notes);


// Count Notes Elements
document.getElementById("numberOfElements").innerText = "Elemente: " + notes.length;


// Add new note to div
if( notes.length == 0 ) {
  document.getElementById("notes").innerHTML =  "Keine Notizen";
} else {
    var key = "";
    var list = "";
    for (var i = 0; i <= notes.length - 1; i++) {
  	   value = notes[i];
       list += "<div class='note-item'><p>" + value['title'] + "</p>\n<p>" + 	value['description'] + "</p></div>\n";
		}
    document.getElementById("notes").innerHTML = list;
  }


// Make Notes Div clickable
$('.note-item').on('click', function() {
  $('.note-item').removeClass('active');
  $(this).addClass('active');
});
