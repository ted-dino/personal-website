const header = document.querySelector(".header");
const sections = document.querySelectorAll("section[id]");
const footer = document.querySelector("footer");
const navLinks = document.querySelectorAll(".nav__list a[href]");

let currentSection = sections[0].getAttribute("id");

navLinks[0].setAttribute("aria-current", "page");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(
      `.nav__list a[href="#${sectionId}"]`
    );

    if (footer.getBoundingClientRect().top <= 688) {
      document
        .querySelector(".nav__list a[href*=contact]")
        .setAttribute("aria-current", "page");
      currentSection = "contact";
    } else {
      document
        .querySelector(".nav__list a[href*=contact]")
        .removeAttribute("aria-current");
      currentSection = sectionId;
    }

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight &&
      currentSection !== "contact"
    ) {
      navLinks.forEach((link) => link.removeAttribute("aria-current"));
      navLink.setAttribute("aria-current", "page");
    } else {
      navLink.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  if (this.scrollY >= 20) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
