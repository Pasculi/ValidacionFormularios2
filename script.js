const form = document.querySelector('.form');
const input = document.querySelector('.form__input')
console.log(form);
console.log(input)

function showError(input) {
  input.classList.add('form__input_type_error');
};

function hideError(input) {
  input.classList.remove('form__input_type_error');
};

function checkInputValidity(form) {
  if (!input.validity.valid) {
    showError(input)
  } else {
    hideError(input)
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
})

input.addEventListener('input', function (evt) {
  checkInputValidity();
})