let slidePosition = 0;
let slides = document.getElementsByClassName("carousel_item");
let totalSlides = slides.length;

document
  .getElementById("carousel_button_next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document
  .getElementById("carousel_button_prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel_item--visible");
    slide.classList.add("carousel_item--hidden");
  }
  slides[slidePosition].classList.add("carousel_item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = 0;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
