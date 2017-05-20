var notes = sessionStorage.getItem("notes");
if( !notes )
{
    sessionStorage.setItem("notes", JSON.stringify([]));
    notes = sessionStorage.getItem("notes");
}
notes = JSON.parse(notes);

document.getElementById("numberOfElements").innerText = notes.length;

document.getElementById("elements").innerHTML = notes.length == 0 ? "none" : notes.join("</br>"); //very very simple solution!
