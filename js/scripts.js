$(function() {
  $("form#height-check").submit(function(event) {
    event.preventDefault();
    var hInput = parseInt($("input#height-input").val());
    console.log(hInput);
    if (hInput < 52) {
      $('.short').show();

    } else {
      $('.tall, .short').show();
    }
  });
});
