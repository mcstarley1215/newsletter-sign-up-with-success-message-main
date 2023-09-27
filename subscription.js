const emailInput = document.querySelector('.js-email-input');
const validEmail = document.querySelector('.js-validate-email');
const signUp = document.querySelector('.js-sign-up');
const imageDiv = document.querySelector('.js-image-div');
const subscriptionComplete = document.querySelector('.js-subscription');
const emailSpan = document.querySelector('.js-email-span');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const email = 'example@email.com';

document.querySelector('.js-subscribe')
  .addEventListener('click', () => {
    if (isValidEmail(emailInput.value)) {
      signUp.style.display = 'none';
      imageDiv.style.display = 'none';
      subscriptionComplete.style.display = 'block';
      emailSpan.innerHTML = emailInput.value;
    } else {
      validEmail.innerHTML = 'Valid email required';
    }
  });

document.querySelector('.js-dismiss-button')
  .addEventListener('click', () => {
    signUp.style.display = 'flex';
    imageDiv.style.display = 'block';
    emailInput.value = '';
    validEmail.innerHTML = '';
    subscriptionComplete.style.display = 'none';
  });
