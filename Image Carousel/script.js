const carouselContainerEle = document.querySelector('.carouselContainer');
const nextEle = document.querySelector('.next');
const prevEle = document.querySelector('.prev');
const imgEle = document.querySelectorAll('.carouselContainer img');
console.log(imgEle.length);
let i = 0;
autoCarousel();
function autoCarousel() {
    i++;
    if (i > imgEle.length - 1) {
        i = 0;
    }
    carouselContainerEle.style.transform = `translateX(${-500 * i}px)`;
    setTimeout(() => {
        autoCarousel()
    }, 5000);
}

nextEle.addEventListener('click', nextCarousel)
prevEle.addEventListener('click', prevCarousel)
function nextCarousel() {
    i++;
    if (i > imgEle.length - 1) {
        i = 0;
    }
    carouselContainerEle.style.transform = `translateX(${-500 * i}px)`;

}
function prevCarousel() {
    i--;
    if (i < 0) {
        i = imgEle.length - 1;
    }
    carouselContainerEle.style.transform = `translateX(${-500 * i}px)`;
}