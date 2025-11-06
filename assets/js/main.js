/*=============== SEARCH ===============*/
let searchIcon = document.getElementById("search-toggle");
let searchCloseIcon = document.querySelector(".search .ri-close-line");
let searchDiv = document.querySelector(".search");

searchIcon.addEventListener("click", () => {
  searchDiv.classList.add("active");
});
searchCloseIcon.addEventListener("click", () => {
  searchDiv.classList.remove("active");
});

/*=============== LOGIN ===============*/
let loginIcon = document.getElementById("login-toggle");
let loginDiv = document.querySelector(".login");
let loginCloseIcon = document.querySelector(".login .ri-close-line");

loginIcon.addEventListener("click", () => {
  loginDiv.classList.add("active");
});
loginCloseIcon.addEventListener("click", () => {
  loginDiv.classList.remove("active");
});

/*=============== ADD SHADOW HEADER ===============*/
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

/*=============== FEATURED SWIPER ===============*/
let featuredSwiper = new Swiper(".featured-swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});
/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});
/*=============== SHOW SCROLL UP ===============*/
let scrollUp = document.querySelector(".up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/*=============== DARK LIGHT THEME ===============*/
let themeBtn = document.querySelector("#theme-toggle");
let body = document.body;

// Check saved theme on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
}

// Toggle theme on click
themeBtn.addEventListener("click", () => {
  let isDark = body.classList.toggle("dark-theme");
  
  // Save to localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Switch icon
  themeBtn.classList.toggle("ri-moon-line", !isDark);
  themeBtn.classList.toggle("ri-sun-line", isDark);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
let sr = ScrollReveal({
  origin: 'top',
  distance: '60px',      // how far elements move
  duration: 2500,        // animation duration (ms)
  delay: 400,            // delay before animation starts
});
sr.reveal('.home .container .left , .featured .container , .new .container , .join .container , .testimonial .container , footer')
sr.reveal('.home .swiper', {delay: 500})
sr.reveal('.services .container .card', {interval: 100})
sr.reveal('.discount .container .text',{origin: 'right'})
sr.reveal('.discount .container .imgs',{origin: 'left'})