import '../css/styles.css';
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const { name, value } = event.target;

    formData[name] = value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData.email = '';
  formData.message = '';
}