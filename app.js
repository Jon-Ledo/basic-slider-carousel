const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

let counter = 0
nextBtn.addEventListener('click', () => {
  counter++
  if (counter === slides.length) counter = 0
  carousel()
})

prevBtn.addEventListener('click', () => {
  counter--
  if (counter === -1) counter = slides.length -1
  carousel()
})

function carousel() {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}
