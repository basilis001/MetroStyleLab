const footer = document.querySelector('footer');
const nav = document.querySelector('main nav');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.add('pushed');
        } else {
            nav.classList.remove('pushed');
        }
    });
}, {
    threshold: 0
});

observer.observe(footer);
