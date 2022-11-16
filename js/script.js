$(function() {
  //caches a jQuery object containing the header element
  var header = $('header');
  function update() {
    var scroll = $(window).scrollTop();
    if (scroll >= $(window).height() - 50) {
      header.addClass('scroll');
    } else {
      header.removeClass('scroll');
    }
  }
  $(window).scroll(update);
  update();
});
