import ScrollReveal from "scrollreveal";
let preloaderDelay = 0;

const delayArray = [1500, 2000, 2500, 3000, 3500];
const randomIndex = Math.floor(Math.random() * delayArray.length);
preloaderDelay = delayArray[randomIndex];

window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");
  const container = document.querySelector(".container");
  const htmlElement = document.documentElement;

  setTimeout(() => {
    htmlElement.style.overflow = "auto";
    container.classList.remove("hide-container");
    loader.remove();
  }, preloaderDelay);
});

ScrollReveal().reveal(".header", {
  opacity: 0,
  delay: preloaderDelay + 200,
});

ScrollReveal().reveal("#home", {
  distance: "50px",
  delay: preloaderDelay + 200,
  opacity: 0,
});

ScrollReveal().reveal("#home h1", {
  distance: "100px",
  delay: preloaderDelay + 300,
});

ScrollReveal().reveal("#home p", {
  distance: "100px",
  delay: preloaderDelay + 300,
});

ScrollReveal().reveal("#home a", {
  distance: "150px",
  delay: preloaderDelay + 300,
});

ScrollReveal().reveal("#home img", {
  opacity: 0,
  delay: 200,
  duration: 800,
  easing: "ease-in",
});

ScrollReveal().reveal(".section-heading", {
  opacity: 0,
  duration: 2000,
  distance: "50px",
});

ScrollReveal().reveal(".section-paragraph", {
  opacity: 0,
  duration: 2000,
  distance: "50px",
});

ScrollReveal().reveal(".stack__card", {
  distance: "-10px",
  duration: 500,
  interval: 200,
});

ScrollReveal().reveal("#portfolio .project-card", {
  origin: "bottom",
  distance: "50px",
  duration: 1500,
  interval: 1000,
  opacity: 0,
});

ScrollReveal().reveal(".about__images img", {
  origin: "top",
  distance: "50px",
  duration: 1500,
  interval: 500,
  opacity: 0,
});

ScrollReveal().reveal("footer", {
  interval: 200,
  distance: "50px",
  delay: 100,
  opacity: 0,
});
