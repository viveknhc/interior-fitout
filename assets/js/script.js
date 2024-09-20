
var swiper = new Swiper(".service_slide", {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.next-btn', // Custom next button
      prevEl: '.prev-btn', // Custom prev button
    },
    breakpoints: {
  
      200: {
        slidesPerView: 1,
        spaceBetween: 20
      },
  
  
      // When window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // When window width is >= 768px
      767: {
        slidesPerView: 1,
        spaceBetween: 30
      },
  
      999: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });