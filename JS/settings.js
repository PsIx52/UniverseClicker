const languageBtn = document.getElementById('languageBtn');
const languageMenu = document.getElementById('languageMenu');
const arrow = document.getElementById('arrow');
const selectedLang = document.getElementById('selectedLang');
languageBtn.addEventListener('click', () => {
    languageMenu.classList.toggle('hidden');
    arrow.style.transform = languageMenu.classList.contains('hidden') ? '' : 'rotate(180deg)';
});
document.addEventListener('click', (e) => {
    if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
        languageMenu.classList.add('hidden');
        arrow.style.transform = '';
    }
});

const langButtons = languageMenu.querySelectorAll('button');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        langButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedLang.textContent = button.querySelector('span').textContent;
        languageMenu.classList.add('hidden');
        arrow.style.transform = '';
    });
});
