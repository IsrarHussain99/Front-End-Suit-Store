$(function() {
  "use strict";

  //------- fixed navbar --------//
  $(window).scroll(function(){
    var sticky = $('.header_area'),
    scroll = $(window).scrollTop();

    if (scroll >= 500)
    sticky.addClass('fixed');
    else
    sticky.removeClass('fixed');
  });
});
