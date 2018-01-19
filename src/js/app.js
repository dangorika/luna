import 'slick-carousel';
import tabs from './tabs.js';

$(document).ready(function() {
  $('.js-nav-toggle').on('click', function() {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      $(this).children().first().addClass('is-hidden');
    } else {
      setTimeout(() => {
        $(this).children().first().removeClass('is-hidden');
      }, 200);
    }
  });

  // header fixed
  $(window).on('scroll', function() {

    if ($(window).scrollTop() > 10 && !$('.header').hasClass('is-fixed')) {
      window.setTimeout(function() {
        $('.header').addClass('is-fixed');
      }, 50);
    }
    if ($(window).scrollTop() < 10 && $('.header').hasClass('is-fixed')) {
      window.setTimeout(function() {
        $('.header').removeClass('is-fixed');
      }, 50);
    }

  });

  $('a').on('click', function() {
    var h = this.getAttribute('href');
    if (/^#/.test(h) === true) {
      $('html,body').animate({
        scrollTop: $(h).offset().top - 87
      }, 1500);
      $(this)
        .closest('header')
        .find('.js-nav-toggle')
        .removeClass('is-active');
    }
  });

  tabs();

  $('.js-carousel').slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
