"use strict";

//Importance Handlebars Template
function displayImportance() {

    let templateScript = $("#importance-template").html();
    let handlebarTemplate = Handlebars.compile(templateScript);
    let context = {
        displayImportance
    };
    let compiledHtml = handlebarTemplate(context);
    $('#importance-wrapper').html(compiledHtml);
}
//displayNotes();