/* =========================================
   LÓGICA DEL MENÚ MÓVIL
   ========================================= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Abrir y cerrar el menú al tocar el botón de hamburguesa
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Ocultar el menú automáticamente cuando se hace clic en un enlace
document.querySelectorAll('.nav-links a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});