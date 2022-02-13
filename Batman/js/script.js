const swiper = new Swiper('.main_slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    //pagination: {
      //el: '.swiper-pagination',
    //},
  
    // Navigation arrows
    navigation: {
      nextEl: '.main_slider_arrow',
      //prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    //scrollbar: {
     // el: '.swiper-scrollbar',
    //},
});