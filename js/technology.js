async function getTec() {
  const apiResp = await fetch('../data.json')
  const apiData = await apiResp.json()
  const { technology } = apiData

  console.log(technology)

  var swap = document.querySelector('.swap')

  for (let i in technology) {
    swap.innerHTML += `<div id="${i}" class=" swap-style" ><a >${i}</a></div>`

    var ids = document.querySelectorAll('.swap div')

    for (let n of ids) {
      n.addEventListener('click', () => {
        showTech(n.id)
      })
    }
  }

  function showTech(index) {
    let img = document.querySelector('.img'),
      description = document.querySelector('.description')

    img.innerHTML = `<figure class="mobile"><img src="${technology[index].images.landscape}"/></figure>
    <figure class="desktop"><img src="${technology[index].images.portrait}"/></figure>
    `

    description.innerHTML = `
    <h2>the Tecnology...</h2>
    <p class="name">${technology[index].name}</p>
    <p class="desc">${technology[index].description}</p>
    `

    if (index == 0) {
      ids[0].classList.add('active-swap')
      ids[1].classList.remove('active-swap')
      ids[2].classList.remove('active-swap')
    } else if (index == 1) {
      ids[0].classList.remove('active-swap')
      ids[1].classList.add('active-swap')
      ids[2].classList.remove('active-swap')
    } else if (index == 2) {
      ids[0].classList.remove('active-swap')
      ids[1].classList.remove('active-swap')
      ids[2].classList.add('active-swap')
    }
  }

  showTech(0)
}

getTec()
