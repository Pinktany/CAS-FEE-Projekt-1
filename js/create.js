function send() {

	var title = document.getElementById("title").value;
	var description = document.getElementById("description").value
	sessionStorage.setItem(title, description);

   window.location.replace("app.html");

}

(function() {
    activateStyle(getDefaultStyle());
})();
