import throttle from 'lodash.throttle';

const formData = {};

let refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));

populateOnFormInput();
// populateTextInput()

function formSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log('Delete text');
}

function formInput(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateOnFormInput() {
  let savedMesssage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedMesssage) {
    console.log(savedMessage);
  }
}

// function populateTextInput() {
//     const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
//      if(userData && Object.values(userData) !== [ ] ) {
//       form.email.value = userData.email;
//       form.message.value = userData.message;
//       formData.email = userData.email;
//       formData.message = userData.message;
//      }
//   }
