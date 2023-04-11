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
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
});

closeBtn.addEventListener("click", () => {
  modal.close();
  torch.remove();
  easter.remove();
});
