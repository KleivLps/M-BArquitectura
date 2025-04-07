let currentIndex = 0;
const images = document.querySelectorAll(".slider5 img");
const thumbnails = document.querySelectorAll(".thumbnails img");

function changeImage(index) {
    images[currentIndex].classList.remove("active");
    thumbnails[currentIndex].classList.remove("active");
    currentIndex = index;
    images[currentIndex].classList.add("active");
    thumbnails[currentIndex].classList.add("active");
}

function autoSlide() {
    let nextIndex = (currentIndex + 1) % images.length;
    changeImage(nextIndex);
}

setInterval(autoSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => changeImage(index));
    });
});