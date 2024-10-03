
var swiper = new Swiper(".service_slide", {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    999: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});




var swiper = new Swiper(".clients_slide", {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.next-btn', // Custom next button
    prevEl: '.prev-btn', // Custom prev button
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {

    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },


    // When window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // When window width is >= 768px
    767: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    999: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


var swiper = new Swiper(".testimonial_slide", {
  centeredSlides: true,
  loop:true,
  speed: 1500,
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    999: {
      slidesPerView: 2.5,
    }
  }
});


// AOS

AOS.init();

// Preloader

// Set the timeout to hide the loader after 3 seconds
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('preloader').classList.add('hide');
  }, 1000); 
});