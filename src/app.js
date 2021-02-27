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
const dotElems = sliderElem.querySelectorAll('.slider__dot')
const indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {
  dotElem.addEventListener('click', (e) => {
    const currentPos = parseInt(sliderElem.getAttribute('data-pos'))
    const newPos = parseInt(dotElem.getAttribute('data-pos'))

    const newDirection = (newPos > currentPos ? 'right' : 'left')
    const currentDirection = (newPos < currentPos ? 'right' : 'left')

    indicatorElem.classList.remove(`slider__indicator--${currentDirection}`)
    indicatorElem.classList.add(`slider__indicator--${newDirection}`)
    sliderElem.setAttribute('data-pos', newPos)
  })
})
