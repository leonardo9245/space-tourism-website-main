const swap = document.querySelector('.swap')

async function getCrew() {
  const apiResp = await fetch('../data.json')
  const respData = await apiResp.json()

  const { crew } = respData
  console.log(crew)

  for (let i in crew) {
    swap.innerHTML += `<a id="${i}" class="swap-style active"><svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="5" fill="white"/>
    </svg>
    </a>`

    let ids = document.querySelectorAll('.swap a')

    for (let n of ids) {
      n.addEventListener('click', () => {
        showCrew(n.id)
      })
    }
  }

  function showCrew(index) {
    let image = document.querySelector('.img'),
      description = document.querySelector('.description')

    image.innerHTML = `<figure><img src="${crew[index].images.png}" /></figure>`

    description.innerHTML = `<p class="role">${crew[index].role}</p>
    <p class="name">${crew[index].name}</p> 
    <p class="bio">${crew[index].bio}</p>
    `
  }
  showCrew(0)
}

getCrew()
