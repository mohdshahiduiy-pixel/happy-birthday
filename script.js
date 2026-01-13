// ===========================
// Floating Hearts Animation
// ===========================
const heartsContainer = document.getElementById('floatingHearts');

function createHeart() {
  const heart = document.createElement('span');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  heartsContainer.appendChild(heart);

  let speed = 1 + Math.random() * 3;
  let pos = window.innerHeight;

  function floatUp() {
    pos -= speed;
    heart.style.top = pos + 'px';
    heart.style.opacity = pos/window.innerHeight;
    if(pos < -50) heart.remove();
    else requestAnimationFrame(floatUp);
  }

  floatUp();
}

setInterval(createHeart, 300);

// ===========================
// Fireworks Canvas
// ===========================
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const fireworks = [];
class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height/2;
    this.radius = Math.random() * 2 + 1;
    this.color = 'hsl(' + Math.random()*360 + ', 100%, 50%)';
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.y -= 2;
    if(this.y < 0) this.y = canvas.height;
  }
}

for(let i=0;i<100;i++) fireworks.push(new Firework());

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  fireworks.forEach(f => { f.update(); f.draw(); });
  requestAnimationFrame(animate);
}

animate();
