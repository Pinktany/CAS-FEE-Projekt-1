function send() {

    let addNote = function (title, description, dueDate, importance) {

        let notes = JSON.parse(sessionStorage.getItem('notes')) || [];
        let creationDate = moment().format('YYYY-MM-DD');
        let newNote = {
            'title': document.getElementById("title").value,
            'description': document.getElementById("description").value,
            'dueDate': document.getElementById("dueDate").value,
            'creationDate': creationDate,
            'importance': document.querySelector('input[name="importance"]:checked').value
    };


    notes.push(newNote);
    sessionStorage.setItem('notes', JSON.stringify(notes));
    };

    addNote('title', 'description', 'dueDate', 'creationDate', 'importance');
    window.location.replace("app.html");
}

//Styleswitcher
function getDefaultStyle() {
    activateStyle(getDefaultStyle());
}