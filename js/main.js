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


const roundNumbers = document.querySelectorAll('.roundNumbers');
const buttons = document.querySelectorAll('.button')
buttons.forEach((el) => {el.addEventListener('click', changeColor)})

function changeColor() {
    for( let i = 0; i < 5; i++){
        if(images[i].classList[2] == 'active'){
            
            roundNumbers[i].classList.add('activeRoundButton')
        }
    }
        
}