function send(){

  var addNotes = function (title, description) {
  	var oldNotes = JSON.parse(sessionStorage.getItem('notesArray')) || [];
		var newNotes = {
    	'title': document.getElementById("title").value,
      'description': document.getElementById("description").value
    };
  oldNotes.push(newNotes);
	sessionStorage.setItem('notesArray', JSON.stringify(oldNotes));
	};

  addNotes('title', 'description');
  window.location.replace("app.html");
}

//Styleswitcher
(function() {
    activateStyle(getDefaultStyle());
})();
