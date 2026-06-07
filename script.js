// Fireworks (JavaScript Part)
// Program by Zidaan
// Global variables and canvas setup
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext('2d');
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;
let timeTracker = 0;
let dynamicRadiusMax = Math.min(screenWidth, screenHeight) * 0.45; 
let targetX = screenWidth / 2;
let targetY = screenHeight / 2;
let currentX = screenWidth / 2;
let currentY = screenHeight / 2;
// Info modal toggles
document.getElementById("infoButton").addEventListener("click", function () {
  let modal = document.getElementById("infoModal");
  modal.style.display = "block";
  setTimeout(() => modal.style.opacity = 1, 10);
});
// Function to close info modal
window.closeInfoModal = function() {
  let modal = document.getElementById("infoModal");
  modal.style.opacity = 0;
  setTimeout(() => modal.style.display = "none", 300);
};
// Responsive canvas resizing
window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    dynamicRadiusMax = Math.min(screenWidth, screenHeight) * 0.45;
    targetX = screenWidth / 2;
    targetY = screenHeight / 2;
});
//  Mouse Tracking
window.addEventListener('mousemove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
});
// Touch Tracking
window.addEventListener('touchmove', (event) => {
    targetX = event.touches[0].clientX;
    targetY = event.touches[0].clientY;
}, {passive: true});
// TILT / GYROSCOPE Tracking
window.addEventListener('deviceorientation', (event) => {
    if (event.gamma !== null && event.beta !== null) {
        targetX = (screenWidth / 2) + (event.gamma * 15);
        targetY = (screenHeight / 2) + (event.beta * 15);
        targetX = Math.max(0, Math.min(screenWidth, targetX));
        targetY = Math.max(0, Math.min(screenHeight, targetY));
    }
});
// Reset to center
window.addEventListener('mouseout', () => { targetX = screenWidth / 2; targetY = screenHeight / 2; });
window.addEventListener('touchend', () => { targetX = screenWidth / 2; targetY = screenHeight / 2; });
// Main Animation Loop
function drawFireworks() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
    ctx.fillRect(0, 0, screenWidth, screenHeight);
    ctx.globalCompositeOperation = 'lighter';
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;
    let wavePattern = Math.sin(timeTracker) * 2 * Math.PI;
    // Draw fireworks particles
    for (let i = 0; i < 400; ++i) {
        let currentRadius = dynamicRadiusMax * Math.sin(i * wavePattern);
        let colorHue = (i + 12 + (timeTracker * 50000)) % 360;
        ctx.fillStyle = `hsla(${colorHue}, 100%, 60%, 1)`;
        ctx.beginPath();
        let pointX = Math.sin(i) * currentRadius + currentX;
        let pointY = Math.cos(i) * currentRadius + currentY;
        ctx.arc(pointX, pointY, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
    timeTracker += 0.000005;
    timeTracker %= 2 * Math.PI;
}
// Start the animation loop
function animate() {
    window.requestAnimationFrame(animate);
    drawFireworks();
}
animate();
// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('✅ Service Worker registered:', reg.scope))
      .catch(err => console.error('❌ Service Worker error:', err));
  });
}
// Security features with taunts
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("😏 No right click! Thought you were smart, huh?");
});
document.addEventListener('keydown', function (e) {
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
    alert("😈 F12? Trying to act clever? Nope!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    alert("😜 Inspect shortcut? Busted!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    alert("😂 Console peek? Dream on!");
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    alert("😅 View source? Not happening, buddy!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    alert("😏 Element inspector? You wish!");
  }
});
// End of Program