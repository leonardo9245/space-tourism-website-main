var button = document.getElementById('hamburguer-button')
var menu = document.getElementById('menu')
var links = document.querySelectorAll('header nav .close, main')

button.addEventListener('click', () => {
  menu.style.display = 'block'
})

for (let link of links) {
  link.addEventListener('click', () => {
    menu.style.display = 'none'
  })
}
