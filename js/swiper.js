let headerSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    //direction: 'horisontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 1,
  })


  /* Brends Slider */
  
  let brendsSlider = new Swiper('.brends-swiper-container', {
    // Optional parameters
    //direction: 'horisontal',
    loop: true,
    // If we need pagination
   
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 6,
    slidesPerGroup: 6,
    watchOverflow: true,
    initialSlide: 0,

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      1201: {
        slidesPerView: 6,
      },
    }
  
  })

