const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

// Відслідковуємо введення даних користувачем
emailInput.addEventListener('input', () => {
  const trimmedEmail = emailInput.value.trim(); // Видаляємо пробіли по краях
  localStorage.setItem('userEmail', trimmedEmail);
});

messageInput.addEventListener('input', () => {
  const trimmedMessage = messageInput.value.trim(); // Видаляємо пробіли по краях
  localStorage.setItem('userMessage', trimmedMessage);
});

// При завантаженні сторінки перевіряємо стан сховища
window.addEventListener('load', () => {
  const savedEmail = localStorage.getItem('userEmail');
  const savedMessage = localStorage.getItem('userMessage');

  // Заповнюємо поля форми збереженими значеннями
  if (savedEmail) {
    emailInput.value = savedEmail;
  }
  if (savedMessage) {
    messageInput.value = savedMessage;
  }
});

// При сабміті форми перевіряємо, чи обидва елементи форми заповнені
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const userEmail = emailInput.value.trim();
  const userMessage = messageInput.value.trim();

  if (userEmail && userMessage) {
    // Виводимо дані у консоль
    const formData = {
      email: userEmail,
      message: userMessage,
    };
    console.log('Form Data:', formData);

    // Очищаємо локальне сховище
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userMessage');

    // Очищаємо поля форми
    emailInput.value = '';
    messageInput.value = '';
  } else {
    console.log('Please fill in both email and message fields.');
  }
});