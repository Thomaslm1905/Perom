function hideMenu() {
  var menuToggle = document.getElementById('menu-toggle');
  menuToggle.checked = false; // Set nilai checkbox menjadi false untuk menyembunyikan menu
}

function SENDEMAIL() {
  var NAME = document.getElementById('NAME').value;
  var EMAIL = document.getElementById('EMAIL').value;
  var MESSAGE = document.getElementById('MESSAGE').value;

  // Kirim email atau lakukan tindakan yang sesuai di sini

  // Contoh: Menampilkan pesan sukses
  var statusMessage = document.getElementById('statusMessage');
  statusMessage.innerHTML = 'Message sent successfully!';
  statusMessage.style.color = '#4caf50';

  // Optional: Reset formulir setelah mengirim
  document.getElementById('contactForm').reset();
}

