var button = document.querySelector('.hamburguer-button');
var menu = document.getElementById('menu');
var links = document.querySelectorAll(' main, #menu');

button.addEventListener('click', () => {
  menu.classList.toggle('open-menu');
  button.classList.toggle('on');
});

for (let link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('open-menu');
    button.classList.remove('on');
  });
}
