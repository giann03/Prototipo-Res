function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }

  const fechaLlegadaInput = document.getElementById('fecha-llegada');
  const fechaSalidaInput = document.getElementById('fecha-salida');

  fechaLlegadaInput.addEventListener('input', () => {
    fechaSalidaInput.min = fechaLlegadaInput.value;
    if (fechaSalidaInput.value < fechaLlegadaInput.value) {
      fechaSalidaInput.value = fechaLlegadaInput.value;
    }
  });

  function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const passwordToggle = passwordInput.nextElementSibling;
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
      passwordInput.type = "password";
      passwordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const passwordToggle = document.querySelector('.form__password-toggle');
  
    passwordToggle.addEventListener('click', function () {
      const passwordInput = this.parentElement.querySelector('.form__input');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.innerHTML = '<i class="fas fa-eye"></i>';
      } else {
        passwordInput.type = 'password';
        passwordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
      }
    });
  });
  
  
