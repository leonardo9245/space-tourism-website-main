var button = document.querySelectorAll('.hamburguer-button, .close')
var menu = document.getElementById('menu')
var links = document.querySelectorAll('header nav .close, main, #menu')

for (let buttons of button) {
  buttons.addEventListener('click', () => {
    menu.classList.toggle('open-menu')
  })
}
for (let link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('open-menu')
  })
}
