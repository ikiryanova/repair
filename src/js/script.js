// Обработка и отправка формы через AJAX
$(document).ready(function() {
  var thank = $('#thank');
  var close_thank = $('#close-thank');

  $('#offer-form').on('submit', function(event) {
    event.preventDefault();
    var username = $('.username').val();
    var userphone = $('.userphone').val();
    if (username == '' || userphone == '' || username.length<2 ||username.length>15) {
      valid = false;
      return valid;
     };
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(valid) {
        if (valid == true) {
          // Модуль Спасибо
          thank.addClass('modal-thank_active');
          $("#offer-form").trigger('reset');
        }
        
      }
    });
  });


  $('#modal-form').on('submit', function(event) {
    event.preventDefault();
    var username2 = $('.username2').val();
    var userphone2 = $('.userphone2').val();
    if (username2 == '' || userphone2 == '' || username2.length<2 ||username2.length>15) {
      valid = false;
      return valid;
     };
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(valid) {
        if (valid == true) {
          // Модуль Спасибо
          thank.addClass('modal-thank_active');
          $("#modal-form").trigger('reset');
        }
        
      }
    });
  });

  $('#brif-form').on('submit', function(event) {
    event.preventDefault();
    var username3 = $('.username3').val();
    var userphone3 = $('.userphone3').val();
    var useremail3 = $('.useremail3').val();
    if (username3 == '' || userphone3 == ''|| useremail3 == '' || username3.length<2 ||username3.length>15) {
      valid = false;
      return valid;
     };
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(valid) {
        if (valid == true) {
          // Модуль Спасибо
          thank.addClass('modal-thank_active');
          $("#brif-form").trigger('reset');
        }
        
      }
    });
  });

  close_thank.on('click', function() {
    thank.removeClass('modal-thank_active');
    $('.success').hide();
  });

});
