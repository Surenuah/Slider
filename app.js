const sliderItems = document.querySelector(".slider__items");
const sliderItem = document.querySelectorAll(".slider__item");
const navbarItems = document.querySelectorAll(".navbar__item");

// creating dots and dot-box container
const dotBox = document.createElement("div");
dotBox.classList.add("dot-box");

sliderItem.forEach((item, index) => {
    const slideSpan = document.createElement("span");
    slideSpan.classList.add("dot");
    dotBox.appendChild(slideSpan);


    // changing current slide
    slideSpan.addEventListener("click", (e) => {
        sliderItems.style.transform = `translateX(${-100 * index}vw)`;
        console.log(e.target);
        console.log(sliderItems);
    });
});

const container = document.querySelector(".container");
container.appendChild(dotBox);

// functions to slide items
const dot = document.querySelectorAll(".dot");

let counter = 1;
slide(counter);


let timer = setInterval(autoSlide, 5000);

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
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.display = "none";
    }

    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
        navbarItems[i].className = navbarItems[i].className.replace(' active', '');
    }

    if (n > sliderItem.length) {
        counter = 1;
    }

    if (n < 1) {
        counter = sliderItem.length;
    }

    sliderItem[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
    navbarItems[counter - 1].className += " active";
}

// adding buttons
const next = document.createElement("button");
next.innerHTML = "&#10095;";
next.classList.add("next");

const prev = document.createElement("button");
prev.innerHTML = "&#10094;";
prev.classList.add("prev");

const buttons = document.createElement("div");
buttons.appendChild(prev);
buttons.appendChild(next);

const buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.appendChild(buttons);

next.addEventListener("click", () => {
    plusSlides(1);
});

prev.addEventListener("click", () => {
    plusSlides(-1);
});