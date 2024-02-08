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

    const createImage = document.createElement('img')
    createImage.setAttribute('src', element.foto)
    createParticipant.appendChild(createImage)

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
        }
        createParticipant.classList.toggle('selected')
    })
})

function flexAdjust() {
    if ((participantes.length%3 == 1) && (screen.width > 1000)) {
        selectSection.lastElementChild.style.marginRight = '530px'
    } else {
        selectSection.lastElementChild.style.marginRight = '0'
    }
}

