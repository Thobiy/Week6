let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; }
    slides[slideIndex-1].style.display = "block"; 
  
}
 const btns = document.querySelectorAll(".btn")
 const slider= document.querySelector(".container")

slider.addEventListener("mouseover", () => {
  btns.forEach((btn) => {
    btn.style.display = "block";
  });
});

slider.addEventListener("mouseout", () => {
  btns.forEach((btn) => {
    btn.style.display = "none";
  });
});