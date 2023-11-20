    document.addEventListener('DOMContentLoaded', function () {
      const canvas = document.getElementById('particle-canvas');
      const ctx = canvas.getContext('2d');
      const particles = [];

      window.addEventListener('click', function (e) {
        createBurst(e.x, e.y);
      });

      function createParticles(x, y) {
        const particleCount = 10;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: x,
            y: y,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
          });
        }
      }

      function createBurst(x, y) {
        const burstCount = 50;

        for (let i = 0; i < burstCount; i++) {
          particles.push({
            x: x,
            y: y,
            size: Math.random() * 5 + 2,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
          });
        }
      }

      function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
          ctx.shadowBlur = 10; 
          ctx.shadowColor = 'white';

          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

          ctx.beginPath();
          ctx.arc(
            particles[i].x,
            particles[i].y,
            particles[i].size,
            0,
            Math.PI * 2
          );
          ctx.fill();

          ctx.shadowBlur = 0;

          particles[i].x += particles[i].speedX;
          particles[i].y += particles[i].speedY;
          particles[i].size -= 0.05;

          if (particles[i].size <= 0) {
            particles.splice(i, 1);
            i--;
          }
        }

        requestAnimationFrame(animateParticles);}animateParticles();});
