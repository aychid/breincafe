// Select the button and greeting element
const languageButton = document.getElementById('language-button');

// Add click event listener to the button
languageButton.addEventListener('click', () => {
  // Toggle between English and Papiamentu
  if (languageButton.getAttribute('data-lang') === 'en') {
    languageButton.setAttribute('data-lang', 'pa');
    languageButton.textContent = 'Papiamentu';
  } else {
    languageButton.setAttribute('data-lang', 'en');
    languageButton.textContent = 'English';
  }
});