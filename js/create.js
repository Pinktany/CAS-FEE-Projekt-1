$(function() {
  $("#create").submit(function(e) {
    e.preventDefault();
    var display =
      $("#add-note").val();
      $('ul.list').append('<li>' + display + '</li>');
      $("#result").html(display);
  });
});
