const sliderItems = document.querySelector(".slider__items");
const navbarItems = document.querySelectorAll(".navbar__item");

navbarItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        sliderItems.style.transform = `translateX(${-100 * index}vw)`;
    });
});