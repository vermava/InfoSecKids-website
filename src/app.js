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

Array.prototype.forEach.call(dotElems, (dotElem) => {
  dotElem.addEventListener('click', (e) => {
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
    const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    const newPos = currentPos + 1
    if (newPos < 4) {
      indicatorElem.className = 'sliderindicator'
      indicatorElem.classList.add('sliderindicator--right')
      sliderElem.setAttribute('data-pos', newPos)
    }
  })
  sliderElem.addEventListener('swiped-right', function (e) {
    const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    const newPos = currentPos - 1
    if (newPos > -1) {
      indicatorElem.className = 'sliderindicator'
      indicatorElem.classList.add('sliderindicator--left')
      sliderElem.setAttribute('data-pos', newPos)
    }
  })
}
swiping()
const arrow = () => {
  nextarrowElem.addEventListener('click', function (e) {
    const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    const newPos = currentPos + 1
    if (newPos < 4) {
      indicatorElem.className = 'sliderindicator'
      indicatorElem.classList.add('sliderindicator--right')
      sliderElem.setAttribute('data-pos', newPos)
      arrowvanish()
    }
  })
  prevarrowElem.addEventListener('click', function (e) {
    const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    const newPos = currentPos - 1
    if (newPos > -1) {
      indicatorElem.className = 'sliderindicator'
      indicatorElem.classList.add('sliderindicator--left')
      sliderElem.setAttribute('data-pos', newPos)
      arrowvanish()
    }
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
