const birthdayMusic = document.getElementById("birthdayMusic");
const romanticMusic = document.getElementById("romanticMusic");
const letterBox = document.getElementById("letter");
const photo = document.getElementById("photo");
const surpriseBtn = document.getElementById("surpriseBtn");
const confessBtn = document.getElementById("confessBtn");

/* Try autoplay safely */
window.addEventListener("click", () => {
  if (birthdayMusic.paused) birthdayMusic.play().catch(()=>{});
}, { once: true });

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
or how on New Year’s Day we wore almost the same colour clothes 👕👗 —
it all felt like tiny coincidences, but somehow, they all added up to something magical ✨💫.

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

/* Surprise button behavior */
surpriseBtn.addEventListener("click", () => {
  surpriseBtn.style.display = "none";
  confessBtn.style.display = "inline-block"; // Show confess button
  startHearts();
  startFireworks();
  playRomanticMusic();
});

/* Confess button behavior */
confessBtn.addEventListener("click", () => {
  confessBtn.style.display = "none";
  photo.style.display = "block";
  typeWriter(confession);
});

/* Typing effect */
let i = 0;
function typeWriter(text) {
  if (i < text.length) {
    letterBox.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text), 40);
  }
}

/* Floating hearts */
function startHearts() {
  const container = document.getElementById("floatingHearts");
  setInterval(() => {
    const h = document.createElement("span");
    h.innerText = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (4 + Math.random() * 3) + "s";
    container.appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }, 400);
}

/* Fireworks (simple + light) */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(x, y, Math.random() * 2, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
      ctx.fill();
    }
  }, 600);
}

function playRomanticMusic() {
  if (!romanticMusic.playing) {
    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;
    romanticMusic.play();
  }
}
