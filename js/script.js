var header = document.querySelector('.header')

window.addEventListener('scroll', function () {
    const height = window.pageYOffset;
    header.style.opacity = 1 - (height/600)
})