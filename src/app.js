const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
  })
}
navSlide()
const sliderElem = document.querySelector('.slider')
const dotElems = sliderElem.querySelectorAll('.sliderdot')
const indicatorElem = sliderElem.querySelector('.sliderindicator')
const nextarrowElem = document.querySelector('.nextarrow img')
const prevarrowElem = document.querySelector('.previousarrow img')

let abc=0

const load1 = () => {
  abc=abc+1
  const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
  const newPos = currentPos + 1
  if (newPos < 4) {
    indicatorElem.className = 'sliderindicator'
    indicatorElem.classList.add('sliderindicator--right')
    sliderElem.setAttribute('data-pos', newPos)
    arrowvanish()
  }
}

const load2 = () => {
  abc=abc+1
  const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
  const newPos = currentPos - 1
  if (newPos > -1) {
    indicatorElem.className = 'sliderindicator'
    indicatorElem.classList.add('sliderindicator--left')
    sliderElem.setAttribute('data-pos', newPos)
    arrowvanish()
  }
}

Array.prototype.forEach.call(dotElems, (dotElem) => {
  dotElem.addEventListener('click', (e) => {
    abc=abc+1
    const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    const newPos = parseInt(dotElem.getAttribute('data-pos'))

    const newDirection = (newPos > currentPos ? 'right' : 'left')
    const currentDirection = (newPos < currentPos ? 'right' : 'left')

    indicatorElem.classList.remove(`sliderindicator--${currentDirection}`)
    indicatorElem.classList.add(`sliderindicator--${newDirection}`)
    sliderElem.setAttribute('data-pos', newPos)
    arrowvanish()
  })
})
const swiping = () => {
  sliderElem.addEventListener('swiped-left', function (e) {
    load1()
  })
  sliderElem.addEventListener('swiped-right', function (e) {
    load2()
  })
}
swiping()
const arrow = () => {
  nextarrowElem.addEventListener('click', function (e) {
    load1()
  })
  prevarrowElem.addEventListener('click', function (e) {
    load2()
  })
}
arrow()
const arrowvanish = () => {
  const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
  if (currentPos === 0) {
    prevarrowElem.style.opacity = 0
    nextarrowElem.style.opacity = 1
  } else if (currentPos === 3) {
    prevarrowElem.style.opacity = 1
    nextarrowElem.style.opacity = 0
  } else {
    prevarrowElem.style.opacity = 1
    nextarrowElem.style.opacity = 1
  }
}
arrowvanish()

const load3 = () => {
  if(abc==0){
  const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
  const newPos = currentPos + 1
  if (newPos < 4) {
    indicatorElem.className = 'sliderindicator'
    indicatorElem.classList.add('sliderindicator--right')
    sliderElem.setAttribute('data-pos', newPos)
    arrowvanish()
    setTimeout(load3, 2000);
  }
  else{
    setTimeout(load4, 2000);
  }}
}

const load4 = () => {
  if(abc==0){
  const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
  const newPos = currentPos - 1
  if (newPos > -1) {
    indicatorElem.className = 'sliderindicator'
    indicatorElem.classList.add('sliderindicator--left')
    sliderElem.setAttribute('data-pos', newPos)
    arrowvanish()
    setTimeout(load4, 2000);
  }
  else{
    setTimeout(load3, 2000);
  }}
}

setTimeout(load3,2000);