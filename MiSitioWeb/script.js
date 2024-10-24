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
  