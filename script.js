const birthdayMusic = document.getElementById("birthdayMusic");
const romanticMusic = document.getElementById("romanticMusic");
const surpriseBtn = document.getElementById("surpriseBtn");
const confessBtn = document.getElementById("confessBtn");
const letterBox = document.getElementById("letter");
const photo = document.getElementById("photo");
const heartsContainer = document.getElementById("floatingHearts");

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let i = 0;

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Autoplay safe
window.addEventListener("click", () => {
  if (birthdayMusic.paused) birthdayMusic.play().catch(()=>{});
}, { once: true });

// Confession text
const confession = `
Dear Riya 🌸

I don’t really know yet what I feel in my heart for you 💛,
or what you think about me — and I understand that you might see me as just a friend 🤍.

But somewhere between 26th December and 27th December,
something quietly changed for me 🦋.

When you were crying, I couldn’t ignore it.
We talked, and after that,
so many small moments started to matter 🌱.

Sitting together in the library 📚,
sharing quiet time,
even little coincidences —
they all felt meaningful ✨.

The way you feel comfortable around me 🤍,
even with touch,
never felt awkward or forced.
It felt natural.
Safe.

Somewhere in all this,
I started feeling like I think of you as more than a friend 💛.

If that’s possible, I’d be grateful 🌸.
And if not, that’s okay too 🤍.

What we already share
is still beautiful,
and I truly value it 💖.
`;

// Surprise button
surpriseBtn.addEventListener("click", () => {
  surpriseBtn.style.display = "none";
  confessBtn.style.display = "inline-block";
  startHearts();
  startFireworks();
  switchMusic();
});

// Confess button
confessBtn.addEventListener("click", () => {
  confessBtn.style.display = "none";
  photo.style.display = "block";
  letterBox.style.display = "block";
  letterBox.innerHTML = "";
  i = 0;
  typeWriter();
});

// Typewriter
function typeWriter() {
  if (i < confession.length) {
    letterBox.innerHTML += confession[i] === "\n" ? "<br>" : confession[i];
    i++;
    letterBox.scrollTop = letterBox.scrollHeight;
    setTimeout(typeWriter, 40);
  }
}

// Hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 400);
}

// Fireworks
function startFireworks() {
  setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
      ctx.fill();
    }
  }, 150);
}

// Music switch
function switchMusic() {
  birthdayMusic.pause();
  birthdayMusic.currentTime = 0;
  romanticMusic.play().catch(()=>{});
}
