"use strict";

//Importance
$(document).ready(function () {
    $('.stars').click(function () {
        let a = 0;
        let b = 0;
        $('input[name="importance"]:checked').each(function () {
            a = parseInt($(this).val(), 10);
            let importance = ('$(this)', b);
            b = localStorage.setItem('importance', importance);
        });
    });
});
$('input[type="radio"]').on('change', function() {
    let stars = $('input[type="radio"]:checked').map(function() {
        return this.value;
    }).get();
    console.log(stars);
});

