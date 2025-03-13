let slideIndex = 1;
showSlides(slideIndex);

// Controles de próxima/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles dos dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Exibir apenas o slide atual
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
