/* FLOATING HEARTS */
const heartBox = document.getElementById("floatingHearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heartBox.appendChild(heart);

  let y = window.innerHeight;
  const speed = 1 + Math.random() * 2;

  function move() {
    y -= speed;
    heart.style.top = y + "px";
    heart.style.opacity = y / window.innerHeight;
    if (y < -50) heart.remove();
    else requestAnimationFrame(move);
  }
  move();
}

setInterval(createHeart, 300);

/* FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const sparks = [];
for (let i = 0; i < 80; i++) {
  sparks.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height / 2,
    r: Math.random() * 2 + 1,
    c: `hsl(${Math.random() * 360},100%,50%)`
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sparks.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = s.c;
    ctx.fill();
    s.y -= 1.5;
    if (s.y < 0) s.y = canvas.height;
  });
  requestAnimationFrame(animate);
}

animate();
