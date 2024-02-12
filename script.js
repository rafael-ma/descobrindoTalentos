const participantes = [
    {
        nome:'Anna Laura Ghisi Gonçalves',
        cidade: 'Siderópolis',
        foto: 'assets/participantes/anna-laura-ghisi-goncalves.png'
    },
    {
        nome:'Renata Eduardo Macedo',
        cidade: 'Jacinto Machado',
        foto: 'assets/participantes/renata-eduardo-macedo.png'
    },
    {
        nome:'Karol e Sara',
        cidade: 'Balneário Gaivota',
        foto: 'assets/participantes/karol-e-sara.png'
    },
    {
        nome:'Jardel Antunes',
        cidade: 'Criciúma',
        foto: 'assets/participantes/jardel-antunes.png'
    },
    {
        nome:'Lucas Rocha Varela',
        cidade: 'Balneário Arroio Do Silva',
        foto: 'assets/participantes/lucas-rocha-varela.png'
    },
    {
        nome:'Rafael Matiola Arceno',
        cidade: 'Maracajá',
        foto: 'assets/participantes/rafael-matiola-arceno.png'
    },
    {
        nome:'Cailane Pereira Torres',
        cidade: 'Meleiro',
        foto: 'assets/participantes/cailane-pereira-torres.png'
    },
    {
        nome:'Stéfani Lúcio Albino',
        cidade: 'Nova Veneza',
        foto: 'assets/participantes/stefani-lucio-albino.png'
    },
    {
        nome:'José Alfredo',
        cidade: 'Praia Grande',
        foto: 'assets/participantes/jose-alfredo.png'
    },
    {
        nome:'Maria Eduarda',
        cidade: 'Morro da Fumaça',
        foto: 'assets/participantes/maria-eduarda.png'
    },
    
]

const selectSection = document.querySelector('#select')

participantes.map((element, index) => {
    const createParticipant = document.createElement('div')
    createParticipant.setAttribute('id','participante'+index)
    createParticipant.setAttribute('class','participante')
    selectSection.appendChild(createParticipant)

    const createImageDiv = document.createElement('div')
    createImageDiv.setAttribute('class','image')
    createParticipant.appendChild(createImageDiv)

    const createImage = document.createElement('img')
    createImage.setAttribute('src', element.foto)
    createImageDiv.appendChild(createImage)
    
    const checkIcon = document.createElement('i')
    checkIcon.setAttribute('class','fa-solid fa-check')
    checkIcon.style.display = 'none'
    createImageDiv.appendChild(checkIcon)

    const createName = document.createElement('p')
    createName.setAttribute('class','nome')
    createName.innerText = element.nome
    createParticipant.appendChild(createName)

    const createCity = document.createElement('small')
    createCity.innerText = element.cidade
    createParticipant.appendChild(createCity)
    
    createParticipant.addEventListener('click',() => {
        const isSelected = document.querySelector('.selected')
        if (isSelected != null) {
            isSelected.classList.toggle('selected')
            isSelected.firstElementChild.lastElementChild.style.display = 'none'
        }
        createParticipant.classList.toggle('selected')
        createParticipant.firstElementChild.lastElementChild.style.display = 'block'
    }

    )
})

function nextButton() {
    const selectedParticipant = document.querySelector('.selected')
    console.log(selectedParticipant)
}

function flexAdjust() {
    if ((participantes.length%3 == 1) && (screen.width > 970)) {
        selectSection.lastElementChild.style.marginRight = '465px'
    } else {
        selectSection.lastElementChild.style.marginRight = '0'
    }
}

