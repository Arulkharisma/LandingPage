document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiperHero', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 10000,
            // disableOnInteraction: false,
        },
        speed: 900,
    });

    let swiperSection = new Swiper(".swiperSection", {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // width is <= 850px
            850:{
                slidesPerView:3,
                spaceBetween:20
            },
            520: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            },
            240: {
                slidesPerView: 1,
                spaceBetweenSlides: 20
            },

        }
    });

    let dotSwiper = new Swiper(".dotSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
