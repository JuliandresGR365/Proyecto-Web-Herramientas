// Validación del formulario de contacto o registro
document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
  
    if (nombre === '' || email === '') {
      alert('Por favor, complete todos los campos.');
    } else {
      alert('Registro exitoso.');
    }
  });
  // script.js
document.addEventListener("DOMContentLoaded", function() {
  // Obtener la URL de la página actual
  const currentPage = window.location.pathname.split("/").pop();

  // Seleccionar todos los elementos del menú
  const menuItems = document.querySelectorAll(".nav-link");

  // Agregar la clase 'active' al elemento del menú correspondiente
  menuItems.forEach(item => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    }
  });
});


// script.js
document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("fullImageModal");
  const fullImage = document.getElementById("fullImage");
  const closeBtn = document.querySelector(".close");

  // Mostrar imagen en modal al hacer clic en una miniatura
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
      modal.style.display = "block";
      fullImage.src = this.src;
    });
  });

  // Cerrar modal al hacer clic en el botón de cerrar
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Cerrar modal al hacer clic fuera de la imagen
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


// script.js
window.onscroll = function() { toggleBackToTopButton() };

function toggleBackToTopButton() {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

