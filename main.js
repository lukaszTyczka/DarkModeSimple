let isDarkMode = false;

var button = document.querySelector('.change-mode__btn--js');
button.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.documentElement.style.setProperty(
        '--dark-color',
        isDarkMode ? '#eee' : '#333'
    );
    document.documentElement.style.setProperty(
        '--light-color',
        isDarkMode ? '#333' : '#eee'
    );
});
