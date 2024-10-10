document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    // Get the buttons and containers
    const monthlyBtn = document.getElementById('monthlyBtn');
    const annualBtn = document.getElementById('annualBtn');
    const monthlyContainer = document.querySelector('.pricing_box_sub_container.monthly');
    const annualContainer = document.querySelector('.pricing_box_sub_container.annual');

    // Check if the buttons and containers exist
    if (!monthlyBtn || !annualBtn || !monthlyContainer || !annualContainer) {
        console.error('Buttons or containers not found');
        return;
    }
    console.log('Monthly button:', monthlyBtn);
    console.log('Annual button:', annualBtn);

    // Toggle function
    function togglePricing(showMonthly) {
        console.log('togglePricing called with:', showMonthly);
        if (showMonthly) {
            monthlyBtn.classList.add('activer');
            annualBtn.classList.remove('activer');
            monthlyContainer.style.display = 'grid';
            annualContainer.style.display = 'none';
        } else {
            annualBtn.classList.add('activer');
            monthlyBtn.classList.remove('activer');
            annualContainer.style.display = 'grid';
            monthlyContainer.style.display = 'none';
        }
    }

    // Add event listeners to buttons
    monthlyBtn.addEventListener('click', function() {
        console.log('Monthly button clicked');
        togglePricing(true);
    });

    annualBtn.addEventListener('click', function() {
        console.log('Annual button clicked');
        togglePricing(false);
    });

    // Initial state
    togglePricing(true);
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

document.querySelector('.highlight button').addEventListener('click', function() {
    alert('Redirecting to Security Page...');
    // You can redirect to another page like this:
    // window.location.href = 'https://yoursecuritypage.com';
});


document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const overlayAnimation = anime({
        targets: overlay,
        scaleX: [1, 0],
        easing: 'easeInOutQuart',
        duration: 1500,
        transformOrigin: '100% 50%',
        delay: 500
    });

    const drawingAnimation = anime({
        targets: '.image-container',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
    });
});