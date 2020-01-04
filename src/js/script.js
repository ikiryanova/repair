// Обработка и отправка формы через AJAX
$(document).ready(function() {
  var thank = $('#thank');
  // var close_thank = $('#close-thank');

  $('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data) {
      // $('.success').html(data + ', Ваша форма отправлена.');
      // $('#user_name').val('');
      // $('#user_tel').val('');
      // $('.success').show();
      
      // Модуль Спасибо
      thank.addClass('modal-thank_active');
      $("#offer-form").trigger('reset')
      $('#offer-form')[0].reset();
      
      }
    });
  });


  $('#modal-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data) {
      // $('.success').html(data + ', Ваша форма отправлена.');
      // $('.success').show();
      
      // Модуль Спасибо
      // thank.addClass('modal-thank_active');
      $('#modal-form')[0].reset();
      
      }
    });
  });

  $('#brif-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data) {
      // $('.success').html(data + ', Ваша форма отправлена.');
      // $('.success').show();
      
      // Модуль Спасибо
      // thank.addClass('modal-thank_active');
      $('#brif-form')[0].reset();
      
      }
    });
  });

  // close_thank.on('click', function() {
  //   thank.removeClass('modal-thank_active');
  //   $('.success').hide();
  // });

  // setInterval(function() {
  //   thank.removeClass('modal-thank_active');
  //   $('.success').hide();
  // }, 5000); 


});
