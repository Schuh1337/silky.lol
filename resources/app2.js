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
const popup = document.getElementById('popup');
const popupButton = document.getElementById('popupButton');
const popupCloseButton = document.getElementById('popupCloseButton');
popupButton.addEventListener('click', () => {
popup.style.display = 'block';
setTimeout(() => {
    popup.style.opacity = 1;}, 10);});
popupCloseButton.addEventListener('click', () => {
popup.style.opacity = 0;
setTimeout(() => {
    popup.style.display = 'none';}, 400);});
