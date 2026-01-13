/* ================= LETTER TEXT ================= */
const shortText = `Dear Riya 🌸

Some moments feel small at first,
but they stay with us quietly 🦋`;

const fullText = `Dear Riya, 🌸

I don’t really know yet what I feel in my heart for you 💛,
or what you think about me — and I understand that you might see me as just a friend 🤍.

Somewhere between 26th and 27th December 📅,
something quietly changed for me.
It wasn’t loud or dramatic.
It was subtle — but it stayed 🦋.

Seeing you cry 😢 affected me deeply.
I asked because I genuinely cared.
We talked… 💬
and something felt different ✨.

Sitting together in the library 📚,
New Year coincidences 🎆,
comfort and closeness 🤍 —
it all felt natural.

Somewhere in these moments,
a bond started forming 🌷.
Not forced.
Just real 💖.`;

/* ================= TYPEWRITER ================= */
const letterBox = document.getElementById("letterBox");
let typing = false;

function typeText(text) {
  if (typing) return;
  typing = true;
  letterBox.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      letterBox.innerText += text.charAt(i);
      i++;
      setTimeout(type, 30);
    } else {
      typing = false;
    }
  }
  type();
}

/* Initial text */
typeText(shortText);

/* ================= BUTTONS ================= */
document.getElementById("confessBtn").onclick = () => {
  typeText(fullText);
};

document.getElementById("surpriseBtn").onclick = () => {
  for (let i = 0; i < 20; i++) createHeart();
};

/* ================= FLOATING HEARTS ================= */
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

setInterval(createHeart, 400);

/* ================= FIREWORKS ================= */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const sparks = Array.from({length: 80}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height / 2,
  r: Math.random() * 2 + 1,
  c: `hsl(${Math.random()*360},100%,50%)`
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  sparks.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = s.c;
    ctx.fill();
    s.y -= 1.5;
    if (s.y < 0) s.y = canvas.height;
  });
  requestAnimationFrame(animate);
}
animate();
