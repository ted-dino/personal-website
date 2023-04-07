const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section");
const header = document.querySelector(".header");

const navLinksOptions = {
  rootMargin: "-50px",
  threshold: 0.5,
};

const navLinksObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let sectionId = entry.target.getAttribute("id");
      let navLink = document.querySelector(
        `nav .nav__link[href="#${sectionId}"]`
      );
      navLinks.forEach((link) => {
        link.removeAttribute("aria-current");
      });
      navLink.setAttribute("aria-current", "page");
    }
  });
}, navLinksOptions);

sections.forEach((section) => {
  navLinksObserver.observe(section);
});

function scrollHeader() {
  if (this.scrollY >= 20) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
