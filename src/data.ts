export const navLinks = [
  {
    url: "#home",
    title: "Home",
    logo: "M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z>",
  },
  {
    url: "#skills",
    title: "Skills",
    logo: "M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z",
  },
  {
    url: "#portfolio",
    title: "Portfolio",
    logo: "M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z",
  },
  {
    url: "#about",
    title: "About",
    logo: "M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z",
  },
  {
    url: "#contact",
    title: "Contact",
    logo: "M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z",
  },
];

export const footerSocialLink = [
  {
    url: "mailto:7vhf5zek3@mozmail.com",
    alt: "email",
    src: "/footer-links/email.svg",
  },
  {
    url: "https://www.upwork.com/freelancers/~01f8138f451bb334e9",
    alt: "upwork",
    src: "/footer-links/upwork.svg",
  },
  {
    url: "https://www.linkedin.com/in/ted-dino/",
    alt: "linkedin",
    src: "/footer-links/linkedin.svg",
  },
];

export const stacks = [
  {
    logo: "/stack/typescript.svg",
    name: "typescript",
  },
  {
    logo: "/stack/astro.svg",
    name: "astro",
  },
  {
    logo: "/stack/nextjs.svg",
    name: "nextjs",
  },
  {
    logo: "/stack/tailwind.svg",
    name: "tailwind",
  },
  {
    logo: "/stack/sass.svg",
    name: "sass",
  },
  {
    logo: "/stack/figma.svg",
    name: "figma",
  },
];

export const projects = [
  {
    thumbnail: {
      lg: "/project-thumbnails/edie__lg.webp",
      default: "/project-thumbnails/edie__sm.webp",
    },
    title: "Edie Homepage",
    description:
      "I created a responsive static website using HTML and CSS, organized with the BEM naming convention for easy maintenance. By doing this project, I learned how to optimize images and use semantic HTML which helped me improve my web development skills.",
    links: {
      linkPreview:
        "https://ted-dino.github.io/responsive-web-developer/edie-homepage/",
      githubLink:
        "https://github.com/ted-dino/responsive-web-developer/tree/main/edie-homepage",
    },

    tags: ["Figma to HTML"],
  },
  {
    thumbnail: {
      lg: "/project-thumbnails/scratch-paint__lg.webp",
      default: "/project-thumbnails/scratch-paint__sm.webp",
    },
    title: "Scratch Paint",
    description:
      "A Paint App where you can paint whatever you like, with whatever color you desire.",
    links: {
      linkPreview: "https://scratch-paint.netlify.app/",
      githubLink: "https://github.com/ted-dino/scratch-paint",
    },

    tags: ["Figma to HTML", "React", "SASS", "Hackathon"],
  },
  {
    thumbnail: {
      lg: "/project-thumbnails/auth-app__lg.webp",
      default: "/project-thumbnails/auth-app__sm.webp",
    },
    title: "Authentication App",
    description:
      "This project was challenging as my first experience with authentication, but it provided a valuable learning opportunity. I gained knowledge in setting up authentication and connecting to a database, while also improving my debugging and documentation skills.",
    links: {
      linkPreview: "https://authentication-app-taupe.vercel.app/",
      githubLink: "https://github.com/ted-dino/authentication-app",
    },

    tags: [
      "Figma to HTML",
      "Planetscale",
      "Tailwind CSS",
      "Prisma",
      "Next.js",
      "CRUD",
    ],
  },
];
