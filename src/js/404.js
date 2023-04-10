import confetti from "canvas-confetti";
const easter = document.querySelector("#easter");
const torch = document.querySelector(".torch");
const modal = document.querySelector("#dialog");
const closeBtn = document.querySelector("#class-modal");

const userAgent = navigator.userAgent.toLowerCase();
let startX, startY;

if (/mobile|tablet|ip(ad|od)|android/i.test(userAgent)) {
  document.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  });

  document.addEventListener("touchmove", (event) => {
    const deltaX = event.touches[0].clientX;
    const deltaY = event.touches[0].clientY;

    torch.style.top = `${deltaY}px`;
    torch.style.left = `${deltaX}px`;
  });
} else {
  document.addEventListener("mousemove", function (event) {
    torch.style.top = event.pageY + "px";
    torch.style.left = event.pageX + "px";
  });
}

easter.addEventListener("click", () => {
  modal.show();
  let interval = 0;

  const timer = setInterval(() => {
    interval++;
    confetti({
      particleCount: 100,
      startVelocity: 50,
      spread: 120,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
      ticks: 500,
      disableForReducedMotion: true,
      colors: ["#0f0e16", "#ffffff", "#a7a9be", "#ff8a05"],
    });

    if (interval === 10) {
      clearInterval(timer);
      confetti.reset();
    }
  }, 600);
});

closeBtn.addEventListener("click", () => {
  modal.close();
  torch.remove();
  easter.remove();
});
