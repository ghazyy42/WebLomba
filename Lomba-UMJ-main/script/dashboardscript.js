document.getElementById("searchButton").addEventListener("click", function () {
  var input = document.getElementById("searchInput").value;
  var filter = input.toUpperCase();
  var table = document.getElementById("berkasTable");
  var tr = table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotBox = document.getElementById('chatbot-box');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotMessages = document.getElementById('chatbot-messages');

  chatbotToggle.addEventListener('click', () => {
    chatbotBox.classList.toggle('hidden');
  });

  chatbotClose.addEventListener('click', () => {
    chatbotBox.classList.add('hidden');
  });

  chatbotSend.addEventListener('click', sendMessage);
  chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
      addMessage('user', message);
      chatbotInput.value = '';
      
      const response = getResponse(message.toLowerCase());
      setTimeout(() => {
        addMessage('bot', response);
      }, 1000);
    }
  }

  function getResponse(message) {
    if (message.includes('beasiswa')) {
      return 'HMIF Beasiswa menawarkan dua jenis beasiswa: Beasiswa Kurang Mampu dan Beasiswa Prestasi. Silakan kunjungi halaman Beasiswa untuk informasi lebih lanjut.';
    } else if (message.includes('syarat') || message.includes('persyaratan')) {
      return 'Persyaratan berbeda untuk setiap jenis beasiswa. Secara umum, Anda perlu menyiapkan transkrip nilai, KTM, KTP, dan dokumen pendukung lainnya. Silakan cek halaman detail beasiswa untuk informasi lengkap.';
    } else if (message.includes('deadline') || message.includes('batas waktu')) {
      return 'Batas waktu pendaftaran beasiswa biasanya diumumkan di website kami. Pastikan Anda selalu mengecek pengumuman terbaru untuk informasi deadline.';
    } else if (message.includes('status')) {
      return 'Untuk mengecek status aplikasi beasiswa Anda, silakan login ke akun Anda dan lihat di bagian "Status Berkas".';
    } else if (message.includes('kontak') || message.includes('hubungi')) {
      return 'Anda dapat menghubungi kami melalui email di info@hmifbeasiswa.ac.id atau nomor telepon 021-1234567.';
    } else {
      return 'Maaf, saya tidak memahami pertanyaan Anda. Bisakah Anda mengajukan pertanyaan yang lebih spesifik tentang beasiswa HMIF?';
    }
  }

  function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    
    const textElement = document.createElement('p');
    textElement.textContent = message;
    
    messageElement.appendChild(textElement);
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});