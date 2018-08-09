$(function() {
  $("form#height-check").submit(function(event) {
    event.preventDefault();
    var hInput = parseInt($("input#height-input").val());
  if(hInput) {
    if (hInput < 52) {
      $('.short').show();
    } else if (hInput > 70) {
      $('.tall, .short').show();
    } else {
      $('.tall, .short, .tootall').show();

    }} else {
      alert('Please enter your height')
    }
  });
});
