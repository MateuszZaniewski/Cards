const roundNumbers = document.querySelectorAll('.roundNumbers');
const images = document.querySelectorAll('.image__container');
const next = document.querySelector('.buttonNext')
const prev = document.querySelector('.buttonPrev')
const bars = document.querySelectorAll('.bar')


next.addEventListener('click', fillNextNumber)
prev.addEventListener('click', washPrevNumber)

let currentActive = 0
let currentBar = 0

 async function fillNextNumber() {
    if(currentActive < 4 || currentBar <= 3){
        currentActive++
        roundNumbers[currentActive].classList.add('activeRoundButton')
        bars[currentBar].classList.add('activeConnection')
        currentBar++
        showNextImage()
    } else {
        currentActive = 4
        currentBar = 4
    }  
}

 async function washPrevNumber() {
    if(currentActive > 0 || currentBar > 0){
        roundNumbers[currentActive].classList.remove('activeRoundButton')
        currentActive--
        currentBar--
        bars[currentBar].classList.remove('activeConnection')
        showPrevImage()
    } else {
        currentActive = 0
        currentBar = 0
     }
}

function showNextImage() {
    if(currentActive >= 0){
        images[0].classList.remove('currentActive')
        images[currentActive-1].classList.remove('active')
        images[currentActive].classList.add('active')
        console.log(currentActive)
    }
}

function showPrevImage() {
    images[currentActive].classList.add('active')
    images[currentActive +1].classList.remove('active')
}