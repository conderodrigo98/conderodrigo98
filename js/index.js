var isMainCardFlipped = true;
var mainCardFlipEnabled = true;
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
        var frontArrow = document.getElementById("frontArrow");
        frontArrow.classList.add("arrow_bounce");
    }, 1000);
}

function configureCardFlip() {
    const eventToFlip = isMobile() ? 'click' : 'mouseover';
    mainCard.addEventListener(eventToFlip, event => onFlip(event));

    mainCard.addEventListener('mouseleave', _ => {
        if (!isFlipping) {
            mainCardFlipEnabled = true;
        }
    });
}

function onFlip(event) {
    if (isCursorInFlipZone(event, mainCard)) {
        if (isMobile() || mainCardFlipEnabled) {
            if (isMainCardFlipped) {
                mainCard.classList.add('flip');
                mainCard.classList.remove('unflip');
            } else {
                mainCard.classList.add('unflip');
                mainCard.classList.remove('flip');
            }
            isMainCardFlipped = !isMainCardFlipped;
            mainCardFlipEnabled = isMobile();
            isFlipping = true;
            setTimeout(_ => isFlipping = false, 1001);
        }
    }
}

function isCursorInFlipZone(event, mainCard) {
    const cardPosition = mainCard.getBoundingClientRect();
    const upperX = cardPosition.x + cardPosition.width;
    const lowerX = upperX - cardPosition.width * 0.2;
    const upperY = cardPosition.y + cardPosition.height;
    const lowerY = upperY - cardPosition.height * 0.2;
    return lowerX < event.clientX && event.clientX < upperX
        && lowerY < event.clientY && event.clientY < upperY;
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