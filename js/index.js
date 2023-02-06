$('.team-members').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right-arrow">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.pictures').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right-arrow">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.room-images').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right-arrow">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });


  
$(".testimonial-carousel").slick({
    infinite: true,
    slidesToShow: 2,
    arrows: true,
    dots: false,
    prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right-arrow">',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });