const images = document.querySelectorAll('.image__container');
const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')
const image3 = document.querySelector('.image3')
const image4 = document.querySelector('.image4')
const image5 = document.querySelector('.image5')
images.forEach((el) => el.addEventListener('click', () => {
    console.log(el)

}))