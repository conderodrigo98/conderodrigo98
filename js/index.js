var isMainCardFlipped = true;
var isFlipping = false;
var mainCard = null;

document.addEventListener('readystatechange', _ => {
    if (document.readyState == 'complete') {
        init();
    }
});

function init() {
    mainCard = document.querySelector('.card');

    configureCardFlip();
    calculateExperience();

    if (isMobile()) {
        const backCard = document.querySelector('.card-back');
        backCard.style['overflow-y'] = 'scroll';
    }

    const loader = document.getElementById("loader");
    loader.style.zIndex = 0;
    mainCard.style.opacity = 1;

    setTimeout(_ => {
        var arrows = document.getElementById("arrow");
        arrows.classList.add("arrow_bounce");
    }, 1500);
}

function configureCardFlip() {
    var hammer = new Hammer(document.querySelector("body"));
    hammer.on("swipeleft swiperight", function (ev) {
        if (isMainCardFlipped) {
            mainCard.classList.add('flip');
            mainCard.classList.remove('unflip');
        } else {
            mainCard.classList.add('unflip');
            mainCard.classList.remove('flip');
        }
        isMainCardFlipped = !isMainCardFlipped;
    });
}

function isMobile() {
    return window.innerWidth <= 576;
}

function calculateExperience() {
    const today = new Date();
    const firstWorkDay = new Date(2019, 3, 8, 9, 0);
    const experienceHours = (today - firstWorkDay) / 36e5;

    const hoursSpan = document.getElementById('experience-hours');
    hoursSpan.innerText = experienceHours.toFixed(1);

    const yearsSpan = document.getElementById('experience-years');
    yearsSpan.innerText = Math.floor(experienceHours / 8760);
}