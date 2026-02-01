const navToggle = document.querySelector('.navToggle');
const navMenu = document.querySelector('.navPanel');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape')
            navMenu.classList.remove('open');
    });
    