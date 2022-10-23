const images = document.querySelectorAll('.image__container');

images.forEach((el) => el.addEventListener('click', () => {
    removeClass()
    el.classList.add('active')
}))

function removeClass () {
    images.forEach((el) => {
        el.classList.remove('active')
        el.classList.remove('currentActive')
    })
}