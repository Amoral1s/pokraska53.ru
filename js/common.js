$(document).ready(function () {
  //Всплывающее меню
  jQuery('.header-wrap-menu ul li.menu-item-has-children').hover(function(){
    jQuery(this).children('ul').slideDown(100);
  }, function(){
    jQuery(this).children('ul').slideUp(100);
  });
  //Видео
  $('.video').on('click', function () {
    var video = $(this).attr('data-video');
    $('.overlay').fadeIn(300);
    $('.popup-video').fadeIn(300);
    $('.popup-video iframe').attr('src', video);
  });
  $('.close-video').on('click', function() {
    $('.overlay').fadeOut(300);
    $('.popup-video').fadeOut(300);
    $('.popup-video iframe').attr('src', '');
  });
  $('.close').on('click', function() {
    $('.overlay').fadeOut(300);
    $('.popups').fadeOut(300);
    $('.popup-video').fadeOut(300);
    $('.popup-video iframe').attr('src', '');
  });
  $('.overlay').on('click', function() {
    $('.overlay').fadeOut(300);
    $('.popups').fadeOut(300);
    $('.popup-video').fadeOut(300);
    $('.popup-video iframe').attr('src', '');
  });
  //отзывы слайдер
  $('.feed-wrap').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  //Форма с оффера
  $('.call-calc').on('click', function () {
    $('.calc-wrap').fadeIn(300);
  });
  $('.callback').on('click', function () {
    $('.popup-callback').fadeIn(300);
    $('.overlay').fadeIn(300);
  });
  $('.call-action').on('click', function () {
    $('.popup-action').fadeIn(300);
    $('.overlay').fadeIn(300);
  });
  $('.call-bonus').on('click', function () {
    $('.popup-bonus').fadeIn(300);
    $('.overlay').fadeIn(300);
  });
  //Mob menu
  jQuery('.burger').on('click', function () { 
    jQuery('.burger').toggleClass('burger-active');
    jQuery('.header-wrap-menu').slideToggle(300);
  });

});