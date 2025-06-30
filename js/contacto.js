// Scroll suave para el botón experiencia en contacto.html
      document.addEventListener('DOMContentLoaded', function() {
        const expBtn = document.getElementById('nav-experiencia');
        if (expBtn) {
          expBtn.addEventListener('click', function(e) {
            if (window.location.pathname.endsWith('contacto.html')) {
              e.preventDefault();
              window.location.href = 'index.html#experiencia-laboral';
            }
          });
        }
      });