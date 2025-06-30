// Animación de aparición para la primera sección al cargar la página
      window.addEventListener('DOMContentLoaded', () => {
        const sobreMi = document.getElementById('sobre-mi');
        sobreMi.style.opacity = 0;
        sobreMi.style.transition = 'opacity 1.2s';
        setTimeout(() => {
          sobreMi.style.opacity = 1;
        }, 200);
      });

      // Animación de aparición gradual al hacer scroll para experiencia laboral
      function handleScrollFadeIn() {
        const experiencia = document.getElementById('experiencia-laboral');
        const rect = experiencia.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Calcular el porcentaje de visibilidad
        let visible = 0;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visiblePx = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
          visible = Math.max(0, Math.min(1, visiblePx / rect.height));
        }
        experiencia.style.opacity = visible;
      }
      window.addEventListener('scroll', handleScrollFadeIn);
      window.addEventListener('DOMContentLoaded', handleScrollFadeIn);