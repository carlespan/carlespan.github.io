/* Este script lo he hecho yo. Fuente: w3schools > Read More Read Less */

function myFunction(n) {
  var ellipsis = document.getElementsByClassName("ellipsis")[n]; /*Ellipsis: puntos suspensivos*/
  var moreText = document.getElementsByClassName("more-text")[n];
  var btnText = document.getElementsByClassName("more-button")[n];

  if (ellipsis.style.display === "none") {
    ellipsis.style.display = "inline";
    btnText.innerHTML = "Leer más";
    moreText.style.display = "none";
  } else {
    ellipsis.style.display = "none";
    btnText.innerHTML = "Leer menos";
    moreText.style.display = "inline";
  }
}


/* Slidershows del perfil. Fuente: Create a slideshow, w3schools */

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n,clase) {
  let i;
  let slides = document.getElementsByClassName(clase+" slides");
  let dots = document.getElementsByClassName(clase+" dot");

  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex = n;
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function currentSlide(n,clase) {
  showSlides(n,clase);
}