$(function() {
  //caches a jQuery object containing the header element
  var header = $('header');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= $(window).height() - 100) {
      header.addClass('scroll');
    } else {
      header.removeClass('scroll');
    }
  });
});
