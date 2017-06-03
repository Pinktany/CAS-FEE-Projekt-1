function send() {

    let addNotes = function (title, description, dueDate) {

      //Todo - Check if input is valid
       //if (document.getElementById("title").value === "" || document.getElementById("duedate").value === "") {
       //    console.log("Please enter a valid input.");
       //    return false;
       //}
        let oldNotes = JSON.parse(sessionStorage.getItem('notesArray')) || [];
        let creationDate = moment().format('YYYY-MM-DD');
        let newNotes = {
            'title': document.getElementById("title").value,
            'description': document.getElementById("description").value,
            'dueDate': document.getElementById("dueDate").value,
            'creationDate': creationDate
    };


    oldNotes.push(newNotes);
    sessionStorage.setItem('notesArray', JSON.stringify(oldNotes));
    };

    addNotes('title', 'description', 'dueDate', 'creationDate');
    window.location.replace("app.html");
}

//Styleswitcher
function getDefaultStyle() {
    activateStyle(getDefaultStyle());
}
