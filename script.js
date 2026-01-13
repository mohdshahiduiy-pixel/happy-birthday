// ===========================
// ELEMENTS
// ===========================
const birthdayMusic = document.getElementById("birthdayMusic");
const romanticMusic = document.getElementById("romanticMusic");
const letterBox = document.getElementById("letter");
const photo = document.getElementById("photo");
const surpriseBtn = document.getElementById("surpriseBtn");
const confessBtn = document.getElementById("confessBtn");
const heartsContainer = document.getElementById("floatingHearts");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

// ===========================
// INITIAL SETUP
// ===========================
let i = 0; // typeWriter counter
let heartsInterval;
let fireworksInterval;

// Make canvas full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// ===========================
// CONFESSION TEXT
// ===========================
const confession = `
Dear Riya, 🌸

I don’t really know yet what I feel in my heart for you 💛,
or what you think about me — and I understand that you might see me as just a friend, nothing more than that 🤍.

But somehow, small things between us feel like a butterfly effect 🦋.
A tiny moment, a glance 👀, a smile 😊, or the way you laughed 😄,
and suddenly my day, my thoughts, my feelings start changing in ways I didn’t expect ✨.

On 26th December, when you were crying 😢, I couldn’t just look away.
I asked if you were okay, we talked 💬, and from that moment, so many little moments started to matter 🌟.
Sitting together in the library 📚, noticing we were both born on Wednesday 🗓️,
or how on New Year’s Day we wore almost the same colour clothes 👕👗 — it all felt like tiny coincidences, but somehow, they all added up to something magical ✨💫.

Even the way you feel comfortable with me 🤗,
the way we can be touchy without it ever feeling awkward 💞,
it’s a feeling I’ve never had with anyone before 🌷.

All of these small, ordinary moments — your smile 😁, your blush 😊, the chocolate 🍫, the little thumbs-up 👍 —
they feel like tiny butterflies 🦋 that have quietly started a wind,
moving something bigger inside me 💖💫.

Somewhere inside, I feel like I think of you as more than a friend 💛.
If that’s possible, I’d be grateful 🌸. And if it’s not, that’s completely okay too 🤍.

What we already share is still beautiful in its own way 🌷✨,
and I truly value it 💖.
`;

// ===========================
// AUTOPLAY MUSIC SAFELY
// ===========================
window.addEventListener("click", () => {
  if (birthdayMusic.paused) birthdayMusic.play().catch(() => {});
}, { once: true });

// ===========================
// BUTTON EVENTS
// ===========================

// Surprise button
surpriseBtn.addEventListener("click", () => {
  surpriseBtn.style.display = "none";
  confessBtn.style.display = "inline-block";
  startHearts();
  startFireworks();
  playRomanticMusic();
});

// Confess button
confessBtn.addEventListener("click", () => {
  confessBtn.style.display = "none";
  photo.style.display = "block";
  typeWriter(confession);
});

// ===========================
// TYPEWRITER EFFECT
// ===========================
function typeWriter(text) {
  if (i < text.length) {
    letterBox.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    letterBox.scrollTop = letterBox.scrollHeight; // auto scroll
    setTimeout(() => typeWriter(text), 40);
  }
}

// ===========================
// FLOATING HEARTS
// ===========================
function startHearts() {
  heartsInterval = setInterval(() => {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-2em";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.position = "fixed";
    heart.style.animation = `floatUp ${(4 + Math.random() * 3)}s linear forwards`;
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }, 400);
}

// ===========================
// FIREWORKS
// ===========================
function startFireworks() {
  fireworksInterval = setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let j = 0; j < 30; j++) {
      ctx.beginPath();
      ctx.arc(x + Math.random() * 30 - 15, y + Math.random() * 30 - 15, Math.random() * 2 + 1, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`;
      ctx.fill();
    }
  }, 100);
}

// ===========================
// PLAY ROMANTIC MUSIC
// ===========================
function playRomanticMusic() {
  birthdayMusic.pause();
  birthdayMusic.currentTime = 0;
  romanticMusic.play().catch(() => {});
}

// ===========================
// FLOATING HEART ANIMATION
// ===========================
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
