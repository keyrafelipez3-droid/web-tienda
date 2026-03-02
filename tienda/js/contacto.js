
function submitForm() {
  var nombre = document.getElementById('nombre').value.trim();
  var email = document.getElementById('email').value.trim();
  var asunto = document.getElementById('asunto').value.trim();
  var mensaje = document.getElementById('mensaje').value.trim();
  var valid = true;

  document.getElementById('err-nombre').textContent = '';
  document.getElementById('err-email').textContent = '';
  document.getElementById('err-asunto').textContent = '';
  document.getElementById('err-mensaje').textContent = '';

  if (!nombre) { document.getElementById('err-nombre').textContent = 'El nombre es obligatorio.'; valid = false; }
  if (!email || !/^[^@]+@[^@]+[.][^@]+$/.test(email)) { document.getElementById('err-email').textContent = 'Ingresa un email valido.'; valid = false; }
  if (!asunto) { document.getElementById('err-asunto').textContent = 'El asunto es obligatorio.'; valid = false; }
  if (mensaje.length < 10) { document.getElementById('err-mensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.'; valid = false; }

  if (valid) {
    document.getElementById('contact-form').classList.add('hidden');
    document.getElementById('form-success').classList.remove('hidden');
  }
}
