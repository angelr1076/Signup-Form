let firstname = document.getElementById('first-name');
let lastname = document.getElementById('last-name');
let email = document.getElementById('email');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
const button = document.querySelector('button');

function validateForm() {
  if (
    firstname.value === '' ||
    lastname.value === '' ||
    email.value === '' ||
    password1.value === '' ||
    password2.value === ''
  ) {
    alert(
      'You must fill out the First Name, Last Name, Email and both Password fields in order to submit the form.',
    );
  } else {
    if (password1.value !== password2.value) {
      alert('Your passwords do not match');
    } else {
      alert('Congratulations! Registration complete.');
      firstname.value = '';
      lastname.value = '';
      email.value = '';
      password1.value = '';
      password2.value = '';
    }
  }
}

button.addEventListener('click', validateForm);
