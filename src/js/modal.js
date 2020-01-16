$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var cardLink = $('.card__link');

  button.on('click', function() {
    modal.addClass('modal_active');
  //   setInterval(function() {
  //   modal.removeClass('modal_active');
  // }, 5000);
  });

  cardLink.on('click', function(event) {
    event.preventDefault();
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  });

  
});


