// Отримуємо посилання на поля форми
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

// Слухаємо подію введення тексту
form.addEventListener('input', saveToLocalStorage);

// Функція для збереження значень у локальне сховище
function saveToLocalStorage() {
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Зберігаємо значення у єдиному об'єкті під ключем "feedback-form-state"
  const formData = {
    email: emailValue,
    message: messageValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// При завантаженні сторінки відновлюємо значення з локального сховища
const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedFormData.email || '';
messageInput.value = savedFormData.message || '';

// Перевірка перед сабмітом
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailInput.value.trim() && messageInput.value.trim()) {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    console.log('Форма відправлена:', formData);
    // Очищаємо сховище
    localStorage.removeItem('feedback-form-state');
    // Очищаємо поля форми
    emailInput.value = '';
    messageInput.value = '';
  } else {
    console.log('Будь ласка, заповніть обидва поля форми.');
  }
});
