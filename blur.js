$(function () {
    $('#contact-text').click(function () {
      $('.modal').addClass('open');
  
      if ($('.modal').hasClass('open')) {
        $('#maincontainer').addClass('blur');
      }
    });
  
    $('.close').click(function () {
      $('.modal').removeClass('open');
      $('#maincontainer').removeClass('blur');
    });
  });