// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Bootstrap Form Validator
  (function () {
      'use strict'
    
      var forms = document.querySelectorAll('.needs-validation')
    
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()

  //Mobile menu
    document.addEventListener("DOMContentLoaded", function () {
      const menuToggle = document.getElementById("mobileMenuToggle");
      const mobileMenu = document.getElementById("mobileMenu");
      const closeMenu = document.getElementById("closeMenu");

      menuToggle.addEventListener("click", function () {
          mobileMenu.classList.add("active");
      });

      closeMenu.addEventListener("click", function () {
          mobileMenu.classList.remove("active");
      });
  });