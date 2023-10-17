// <!-- Swiper JS -->

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
    // Slide
    // Fade
    // Cube
    // Coverflow
    // Flip
    // Creative
    // Cards
    // Cube Grid
    // Parallax
    // Zoom
    // Coverflow Rotary
    // Flip Rotary

    fadeEffect: {
        crossfade: true
        // Fade
        // Fade Zoom
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
