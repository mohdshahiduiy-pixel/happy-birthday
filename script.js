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
I respect that completely, and I don’t want to assume anything that isn’t there.

But somewhere between 26th December 📅, when we met and talked,
and 27th December, when our conversations felt indirect yet full of feeling,
something quietly changed for me.
It wasn’t loud or sudden.
It wasn’t dramatic.
It was subtle — almost unnoticeable at first — but it stayed with me 🦋.

That day, when you were crying 😢,
I couldn’t ignore it.
I couldn’t pretend not to see it.
I couldn’t just walk away or act normal.
Seeing you like that affected me more than I expected.
I asked if you were okay because I genuinely wanted to know,
not because I felt I should.
We talked… 💬
and after that, something felt different —
like a door had opened slowly, without either of us forcing it ✨.

After that, so many small things started happening naturally 🌱 —
things that might seem ordinary on their own,
but together felt meaningful.
Sitting together in the library 📚,
talking more than before,
sharing quiet moments without realizing how time was passing.

Even small details started standing out to me —
like noticing that we were both born on the same day, a Wednesday 🗓️,
or how you started coming into my mind unexpectedly,
sometimes just because of your crokes,
sometimes for no clear reason at all.

On New Year’s Day 🎆,
when we wore almost the same colour clothes 👕👗,
I couldn’t help but smile 😊.
You looked genuinely cute —
honestly, you reminded me of Santa Claus 🎅 in the best way possible,
just because of your outfit and the colours you wore.
It was such a simple coincidence,
yet it stayed in my mind longer than I expected 💫.

And then there’s something I’ve never really experienced before.

The way you feel comfortable around me 🤍 —
even with touch —
it never felt awkward or forced.
It felt natural.
Easy.
Safe.
I’ve never been that touchy with anyone in my life,
not in that way,
not without feeling self-conscious or unsure.
But with you, it was different.
There was no tension,
no discomfort —
just comfort and closeness that felt honest 💞.

Somewhere in all these little moments —
the conversations,
the silences,
the coincidences,
the comfort —
it feels like a bond has been forming on its own 🌷.
Not rushed.
Not planned.
Just growing quietly,
like something that didn’t need permission to exist 🦋.

I feel like I think of you as more than a friend 💛.
If that’s possible, I’d be grateful 🌸.
And if it’s not, that’s completely okay too 🤍.
I don’t want to pressure anything
or change what already is.

What we already share is still beautiful in its own way ✨,
and I truly value it —
deeply and sincerely 💖.
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

  letterBox.style.display = "block";   // ✅ force show letter
  letterBox.innerHTML = "";            // ✅ clear old text
  i = 0;                               // ✅ reset typewriter

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
