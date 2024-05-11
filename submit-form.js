const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const messageContainer = document.getElementById('message');
let attempts = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = emailInput.value;
  attempts.push(email); 

  if (email.startsWith('i-am-')) {
    messageContainer.classList.remove('error'); 
    messageContainer.classList.add('success'); 
    messageContainer.innerHTML = `Hooray! You've been subscribed to our mailing list. Here's a printout of all the attempts: <br>`;
    attempts.forEach((attempt, index) => {
      messageContainer.innerHTML += `${index + 1}. ${attempt} <br>`;
    });
  } else {
    messageContainer.classList.remove('success'); 
    messageContainer.classList.add('error'); 
    messageContainer.innerHTML = `Hm, your e-mail address is not valid because it doesn't start with i-am-`;
  }

  emailInput.value = ''; 
});
