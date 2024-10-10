document.addEventListener('DOMContentLoaded', function () {
    const pricingToggle = document.getElementById('pricingToggle');
    const monthlyContainer = document.querySelector('.pricing_box_sub_container.monthly');
    const annualContainer = document.querySelector('.pricing_box_sub_container.annual');

    pricingToggle.addEventListener('change', function () {
        if (this.checked) {
            monthlyContainer.style.display = 'none';
            annualContainer.style.display = 'grid';
        } else {
            monthlyContainer.style.display = 'grid';
            annualContainer.style.display = 'none';
        }
    });

    // Set initial state (Monthly selected by default)
    monthlyContainer.style.display = 'grid';
    annualContainer.style.display = 'none';
});

/*

document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper1 = new Swiper('.card_swiper_pricing', {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            880: {
                slidesPerView: 2,
            },
            980: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },

        },
    });
});
*/