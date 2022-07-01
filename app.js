const sliderItem = document.querySelectorAll(".slider__item");
const dot = document.querySelectorAll(".dot");
const navbarItems = document.querySelectorAll(".navbar__item");
let counter = 1;
slide(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
    counter += 1;
    slide(counter);
}

function plusSlides(n) {
    counter += n;
    slide(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slide(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slide(n) {
    for(let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.display = "none";
    }

    for(let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
        navbarItems[i].className = navbarItems[i].className.replace(' active', '');
    }

    if(n > sliderItem.length) {
        counter = 1;
    }

    if(n < 1) {
        counter = sliderItem.length;
    }

    sliderItem[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
    navbarItems[counter - 1].className += " active";
}