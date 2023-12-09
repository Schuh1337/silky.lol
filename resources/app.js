document.addEventListener('keydown', function (e) {
  if ((e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) || (e.ctrlKey && e.shiftKey && e.key === 'C') || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 's') || (e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.key === 'g') || (e.ctrlKey && e.key === 'f') || (e.ctrlKey && e.key === 'o') || (e.ctrlKey && e.key === 'j') || (e.ctrlKey && e.key === 'h') || (e.ctrlKey && e.key === 'd') || (e.ctrlKey && e.key === '+') || (e.ctrlKey && e.key === '-')) {e.preventDefault();}});
(function () {
  let SSWZ = function () {
      this.keyScrollHandler = function (e) {
          if (e.ctrlKey) {
              e.preventDefault();
              return false; }};};
  if (window === top) {let sswz = new SSWZ(); window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false });}})();
document.addEventListener('contextmenu', function (e) {e.preventDefault();});
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;}
resizeCanvas();
const stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        opacity: Math.random(),
        speed: Math.random() * 0.1 + 0.1});}
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;}
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();}
    requestAnimationFrame(animateStars);}
animateStars();
window.addEventListener('resize', resizeCanvas);
