import ScrollReveal from "scrollreveal";

ScrollReveal().reveal("#home", {
  interval: 200,
  distance: "50px",
  delay: 100,
  opacity: 0,
});

ScrollReveal().reveal("#home h1", {
  distance: "100px",
});

ScrollReveal().reveal("#home p", {
  distance: "100px",
  delay: 100,
});

ScrollReveal().reveal("#home a", {
  distance: "150px",
  delay: 200,
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
