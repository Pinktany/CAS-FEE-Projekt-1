function send(){
    var notes = JSON.parse(sessionStorage.getItem("notes"));
    notes.push(document.getElementById("title").value);
    sessionStorage.setItem("notes", JSON.stringify(notes));
    window.location.replace("app.html");
};
