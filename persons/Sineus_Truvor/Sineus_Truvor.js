const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// Восстановление темы
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeIcon.textContent = '🌙';
}

// Переключение темы
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeIcon.textContent = isLight ? '🌙' : '☀️';
});