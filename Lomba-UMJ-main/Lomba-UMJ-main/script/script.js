document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.style.right = navMenu.classList.contains('active') ? '0' : '-100%';
  });
});

const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-button');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
  return re.test(password);
}

function validatePhoneNumber(phoneNumber) {
  const re = /^\d+$/;
  return re.test(phoneNumber);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const namaLengkap = document.getElementById('namaLengkap').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const alamat = document.getElementById('alamat').value;
  const nomorTelepon = document.getElementById('nomorTelepon').value;
  const tempatLahir = document.getElementById('tempatLahir').value;
  const tanggalLahir = document.getElementById('tanggalLahir').value;
  const jenisKelamin = document.getElementById('jenisKelamin').value;
  const semester = document.getElementById('semester').value;

  if (namaLengkap === '' || email === '' || password === '' || confirmPassword === '' || alamat === '' || nomorTelepon === '' || tempatLahir === '' || tanggalLahir === '' || jenisKelamin === '' || semester === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Harap isi semua kolom formulir!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  if (!validateEmail(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Alamat email tidak valid!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  if (!validatePassword(password)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password harus minimal 8 karakter dan mengandung setidaknya satu angka!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Konfirmasi password tidak cocok!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  if (!validatePhoneNumber(nomorTelepon)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nomor telepon hanya boleh berisi angka!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  Swal.fire({
    title: 'Registrasi Berhasil!',
    text: 'Anda berhasil mendaftar. Silahkan login.',
    icon: 'success',
    confirmButtonText: 'Login',
    confirmButtonColor: '#DD9F00',
    confirmButtonAriaLabel: 'Login',
    customClass: {
      confirmButton: 'swal2-confirm-button-custom'
    },
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = './page/login.html';
    }
  });
});

$(document).ready(function () {
  function animateContainer(container, animationIn, animationOut) {
    var containerTop = $(container).offset().top;
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (windowTop + windowHeight > containerTop && windowTop < containerTop + $(container).height()) {
      $(container).addClass(animationIn).removeClass(animationOut);
    } else {
      $(container).addClass(animationOut).removeClass(animationIn);
    }
  }

  $(window).scroll(function () {
    animateContainer('.container-isi', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-2', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-3', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-4', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-5', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-6', 'fadeInUp', 'fadeOutDown');
  });
});

$(document).ready(function () {
  const floatingButton = $('.floating-button');
  const homeSection = $('#home');

  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() + $(window).height() > homeSection.offset().top &&
      $(window).scrollTop() < homeSection.offset().top + homeSection.outerHeight()) {
      floatingButton.addClass('hidden');
    } else {
      floatingButton.removeClass('hidden');
    }
  });
});