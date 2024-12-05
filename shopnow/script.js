let toggleBtn= document.querySelector(".toggle-bar");
let navLinks= document.querySelector(".nav_bar");
let icons= document.querySelector(".icon");


toggleBtn.addEventListener("click", function(){
  navLinks.classList.toggle('active');
  icons.classList.toggle('active');

});