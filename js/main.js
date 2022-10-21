const images = document.querySelectorAll('.image__container');
const image1 = document.querySelector('.container1')
const image2 = document.querySelector('.container2')
const image3 = document.querySelector('.container3')
const image4 = document.querySelector('.container4')
const image5 = document.querySelector('.container5')
images.forEach((el) => el.addEventListener('click', () => {
    el.classList.toggle('active')
    if(el.classList.contains('container1')){
        console.log('container1')
        el.style.width = '100%'
        image2.style.width = '10%'
        image2.classList.remove('active')
        image3.style.width = '10%'
        image3.classList.remove('active')
        image4.style.width = '10%'
        image4.classList.remove('active')
        image5.style.width = '10%'
        image5.classList.remove('active')
    }
    else if(el.classList.contains('container2')){
        el.style.width = '100%'
        image1.style.width = '10%'
        image1.classList.remove('active')
        image3.style.width = '10%'
        image3.classList.remove('active')
        image4.style.width = '10%'
        image4.classList.remove('active')
        image5.style.width = '10%'
        image5.classList.remove('active')
    }
    else if(el.classList.contains('container3')){
        el.style.width = '100%'
        image1.style.width = '10%'
        image1.classList.remove('active')
        image2.style.width = '10%'
        image2.classList.remove('active')
        image4.style.width = '10%'
        image4.classList.remove('active')
        image5.style.width = '10%'
        image5.classList.remove('active')
    }
    else if(el.classList.contains('container4')){
        el.style.width = '100%'
        image1.style.width = '10%'
        image1.classList.remove('active')
        image3.style.width = '10%'
        image3.classList.remove('active')
        image2.style.width = '10%'
        image2.classList.remove('active')
        image5.style.width = '10%'
        image5.classList.remove('active')
    }
    else if(el.classList.contains('container5')){
        el.style.width = '100%'
        image1.style.width = '10%'
        image1.classList.remove('active')
        image3.style.width = '10%'
        image3.classList.remove('active')
        image4.style.width = '10%'
        image4.classList.remove('active')
        image2.style.width = '10%'
        image2.classList.remove('active')
    }
    
}))