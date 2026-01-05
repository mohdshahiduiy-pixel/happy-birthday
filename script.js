// Countdown to 14 January
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  let birthday = new Date(`January 14, ${year}`);

  if (now > birthday) {
    birthday = new Date(`January 14, ${year + 1}`);
  }

  const diff = birthday - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  countdownEl.textContent = `🎈 ${days} day(s) to go`;
}

updateCountdown();

// Surprise button
function surprise() {
  alert("🎉 Hope your day is as lovely as your smile 😊");
}


