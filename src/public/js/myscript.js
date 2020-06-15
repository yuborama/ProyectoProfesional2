$(document).foundation()
/*--------------------- index----------------------------  */
/*----------------------------- sliders------------------------------- */
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper(document.getElementById('sw-especies'), {
        // Optional parameters
        speed: 100,
        slidesPerView: 3,
        //spaceBetween: 200,
        spaceBetween: 30,
        loop: true
        /*    autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },*/
        /* pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         }, */
    })

});
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper2 = new Swiper(document.getElementById('sw-desc-services'), {
        // Optional parameters
        speed: 100,
        slidesPerView: 1,
        loop: true
        /*    autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },*/
        /* pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         }, */
    })

});
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper3 = new Swiper(document.getElementById('sw-img-services'), {
        // Optional parameters
        speed: 100,
        slidesPerView: 1,
        //spaceBetween: 200,
        spaceBetween: 30,
        loop: true
        /*    autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },*/
        /* pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         }, */
    })

});
/*----------------------------- sliders------------------------------- */
/*--------------------- index----------------------------  */




console.log('hola');


