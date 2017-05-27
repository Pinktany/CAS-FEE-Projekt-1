function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "";
		for (var i = 0; i <= sessionStorage.length - 1; i++) {
			key = sessionStorage.key(i);
			list += "<div class='note-item'><p>" + key + "</p>\n<p>"
					+ sessionStorage.getItem(key) + "</p></div>\n";
		}
		if (list == "") {
			list += "<div><p><i>Keine Notizen</i></p>";
		}
		document.getElementById('notes-list').innerHTML = list;
	} else {
		alert('Notiz konnte nicht gespeichert werden.');
	}
}

function CheckBrowser() {
	if ('sessionStorage' in window && window['sessionStorage'] !== null) {
		// we can use sessionStorage object to store data
		return true;
	} else {
			return false;
	}
}

// Make Notes Div clickable

$(document).ready(function () {
    $('.note-item').click(function () {
        $('.note-item').removeClass('active');
        $(this).addClass('active');
    });
});
