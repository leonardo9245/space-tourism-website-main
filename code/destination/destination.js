/**/

const destination = document.querySelector('.destinations')

async function getDestinations() {
  const apiResp = await fetch('../data.json'),
    respData = await apiResp.json(),
    { destinations } = respData

  let img = document.querySelector('.img'),
    name = document.querySelector('.name'),
    description = document.querySelector('.description'),
    distance = document.querySelector('.distance')

  for (let i in destinations) {
    destination.innerHTML += `<div id="${destinations[i].name}" class="active" ><a id="${i}">${destinations[i].name}</a></div>`

    let dest = document.querySelectorAll('.destinations a')

    for (let n of dest) {
      n.addEventListener('click', () => {
        showDestination(n.id)
      })
    }
  }

  function showDestination(index) {
    img.innerHTML = `<figure><img src="${destinations[index].images.png}"></figure>`

    name.innerHTML = `<h2>${destinations[index].name}</h2>`

    description.innerHTML = `<p>${destinations[index].description}</p>`

    distance.innerHTML = `
    <span>avg. distance</span>
    <p>${destinations[index].distance}</p>
    <span>est. travel time</span>
    <p>${destinations[index].travel}</p>
    `

    let moon = document.getElementById('Moon'),
      mars = document.getElementById('Mars'),
      europa = document.getElementById('Europa'),
      titan = document.getElementById('Titan')

    if (index == 0) {
      moon.classList.add('active')
      mars.classList.remove('active')
      europa.classList.remove('active')
      titan.classList.remove('active')
    } else if (index == 1) {
      moon.classList.remove('active')
      mars.classList.add('active')
      europa.classList.remove('active')
      titan.classList.remove('active')
    } else if (index == 2) {
      moon.classList.remove('active')
      mars.classList.remove('active')
      europa.classList.add('active')
      titan.classList.remove('active')
    } else if (index == 3) {
      moon.classList.remove('active')
      mars.classList.remove('active')
      europa.classList.remove('active')
      titan.classList.add('active')
    }
  }
  showDestination(0)
}

getDestinations()
