$(document).ready(function(){
    $('.carousel__inner').slick({
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png" alt="left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png" alt="right"></button>',
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
              dots: true,
              arrows: false
          }
        }
      ]

    });
  });
              