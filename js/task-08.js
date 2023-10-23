const form = document.querySelector('.login-form');
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

form.addEventListener('submit', function(event) {
  event.preventDefault(); // preventing page reload on form submit

  if (!emailInput.value || !passwordInput.value) {
    alert('Всі поля мають бути заповненними!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    
    console.log(formData);
    form.reset();
  }
});