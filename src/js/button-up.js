$(document).ready(function(){
 
  $(window).scroll(function () {
      // Если отступ сверху больше 40px то показывает стрелку наверх
      if ($(this).scrollTop() > 40) {
          $('#button-up').fadeIn();
      } else {
          $('#button-up').fadeOut();
      }
  });
  
  /** При нажатии на кнопку перемещаемся к началу страницы */
  $('#button-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  
});