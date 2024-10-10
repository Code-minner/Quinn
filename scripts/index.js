
let loader = document.getElementById("loader");

setTimeout(() => {
    loader.classList.add("dis");
    setTimeout(() => {
        loader.style.display = 'none';
    }, 300); // Match this delay to the animation duration in CSS
}, 200);


/*-------------header-----------------*/

document.addEventListener("DOMContentLoaded", ShadowScroller);
function ShadowScroller() {
    // Navbar shadowHeader Scroller Section //
    const shadowHeader = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY > 200;

      
      shadowHeader.classList.toggle("shadow", isScrolled);
    });
  }



  function toggleNavBar() {
    var bar = document.querySelector('.bar');
    var navBar = document.getElementById("navbar")


    bar.classList.toggle('roller');
    bar.classList.toggle('active');
    navBar.classList.toggle("navigation")
}


function opener() {
var menu = document.getElementById("menu")
var icon = document.querySelector(".bx-menu")

menu.classList.toggle("menu")
icon.classList.toggle("bxs-x-square")

}



const cursor = document.querySelector('.cursor');
let timeout;

function updateCursor(e) {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
    cursor.style.display = "block";

    // Clear the previous timeout if it exists
    clearTimeout(timeout);
    
    // Hide the cursor after 1 second of inactivity
    timeout = setTimeout(() => {
        cursor.style.display = "none";
    }, 1000);
}



function createProgressRing(element) {
    const size = 170;
    const strokeWidth = 12;
    const radius = (size / 2) - (strokeWidth / 2);
    const circumference = radius * 2 * Math.PI;
    const color = element.dataset.color;
    const targetPercentage = parseInt(element.dataset.percentage);
    const label = element.querySelector('.progress-ring__label').textContent;

    element.innerHTML += `
        <svg class="progress-ring__svg" width="${size}" height="${size}">
            <circle class="progress-ring__circle progress-ring__circle--bg"
                 stroke-width="${strokeWidth}" fill="transparent"
                r="${radius}" cx="${size/2}" cy="${size/2}"/>
            <circle class="progress-ring__circle progress-ring__circle--fg"
                stroke="${color}" stroke-width="${strokeWidth}" fill="transparent"
                r="${radius}" cx="${size/2}" cy="${size/2}"/>
        </svg>
        <div class="progress-ring__text">
            <div class="progress-ring__percentage">0%</div>
        </div>
    `;

    const circleFg = element.querySelector('.progress-ring__circle--fg');
    const text = element.querySelector('.progress-ring__percentage');

    circleFg.style.strokeDasharray = `${circumference} ${circumference}`;
    circleFg.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circleFg.style.strokeDashoffset = offset;
        text.textContent = `${Math.round(percent)}%`;
    }

    let progress = 0;
    function animateProgress() {
        progress += 0.7;
        if (progress <= targetPercentage) {
            setProgress(progress);
            requestAnimationFrame(animateProgress);
        } else {
            setProgress(targetPercentage);
        }
    }

    animateProgress();
}

// Use IntersectionObserver to trigger animation when the container is in view
const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the element is visible
};

function onIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Initialize progress rings inside the container
            document.querySelectorAll('.progress-ring').forEach(createProgressRing);
            // Stop observing once the animation is triggered
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(onIntersection, observerOptions);

// Target the container with the class `progress_bar_sub_container`
document.querySelectorAll('.progress_bar_sub_container').forEach(container => {
    observer.observe(container);
});



// Use requestAnimationFrame for smoother updates
document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => updateCursor(e));
});

document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});





document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById("video");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var icon = playPauseBtn.querySelector('i');

    function btn_display() {
        if (video.paused) {
            video.play();
            icon.classList.remove('bx-play');
            icon.classList.add('bx-pause');
        } else {
            video.pause();
            icon.classList.remove('bx-pause');
            icon.classList.add('bx-play');
        }
    }

    playPauseBtn.addEventListener('click', btn_display);
});




document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper1 = new Swiper('.card_swiper', {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        spaceBetween: 30,
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
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },

        },
    });
});





const dynamicText = document.getElementById("headchange");

const words = ["SEO Excellence", "Digital Growth", "Innovative Solutions", "Expert Management"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop_blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200); 
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 150);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop_blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1400);
    }
};

typeEffect();





    let circle = new CircleType(document.getElementById('circle_text'));
    circle.radius(10); // Set the radius to curve the text



