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
var selectedParticipant

/* Generation functions to each participant */

participantes.map((element, index) => {
    /* Create the parent div for participant */
    const createParticipant = document.createElement('div')
    createParticipant.setAttribute('id','participante'+index)
    createParticipant.setAttribute('class','participante')
    selectSection.appendChild(createParticipant)

    /* Create the image div for the participant  */
    const createImageDiv = document.createElement('div')
    createImageDiv.setAttribute('class','image')
    createParticipant.appendChild(createImageDiv)

    /* Create the image for the participant */
    const createImage = document.createElement('img')
    createImage.setAttribute('src', element.foto)
    createImageDiv.appendChild(createImage)
    
    /* Create the icon of selected on image div */
    const checkIcon = document.createElement('i')
    checkIcon.setAttribute('class','fa-solid fa-check')
    checkIcon.style.display = 'none'
    createImageDiv.appendChild(checkIcon)

    /* Create the name of participant */
    const createName = document.createElement('p')
    createName.setAttribute('class','nome')
    createName.innerText = element.nome
    createParticipant.appendChild(createName)

    /* Create the city of participant */
    const createCity = document.createElement('small')
    createCity.innerText = element.cidade
    createParticipant.appendChild(createCity)
    
    /* Add event click to toggle the selected participant */
    createParticipant.addEventListener('click',() => {
        const isSelected = document.querySelector('.selected')
        if (isSelected != null) {
            isSelected.classList.toggle('selected')
            isSelected.firstElementChild.lastElementChild.style.display = 'none'
        }
        createParticipant.classList.toggle('selected')
        createParticipant.firstElementChild.lastElementChild.style.display = 'block'
    })
})

/* Auto adjust in diferent screen sizes to the last participant div*/

function flexAdjust() {
    if ((participantes.length%3 == 1) && (screen.width > 970)) {
        selectSection.lastElementChild.style.marginRight = '465px'
    } else {
        selectSection.lastElementChild.style.marginRight = '0'
    }
}

/* Validation to next button */

function nextButton() {
    selectedParticipant = document.querySelector('.selected')
    if (selectedParticipant == null) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você precisa selecionar algum participante!",
        });
    } else {
        toggleHiden()
    }
}

/* Toggle de the hidden page visualization to form */

function toggleHiden() {
    const selecteds = [...document.querySelectorAll('.select')]
    const inputData = document.querySelector('#inputData')

    selecteds.map((element) => {
        element.style.display = 'none'
    })
    inputData.style.display = 'block'
}
/* Form and validation */
const form = document.querySelector('form')
const nameInput = document.querySelector('#nameInput')
const lastNameInput = document.querySelector('#lastNameInput')
const emailInput = document.querySelector('#emailInput')

/* Validate email function */
function isEmailValid(email) {
    /* Validate the email with a regex */
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/)
    return emailRegex.test(email)
}

/* Submit event */

form.addEventListener('submit', (event) => {
    event.preventDefault()

    /* Checks empty name */
    if (nameInput.value === '') {
        Swal.fire('Por favor, preencha o seu nome.')
        nameInput.focus()
        return
    } else
    /* Checks empty last name */
    if (lastNameInput.value === '') {
        Swal.fire('Por favor, preencha o seu sobrenome.')
        lastNameInput.focus()
        return
    } else 
    /* Checks empty and invalid email */
    if (emailInput.value === '' || !isEmailValid(emailInput.value)) {
        Swal.fire('Por favor, preencha com um email válido.')
        emailInput.focus()
        return
    } else {
        fetch('https://api.sheetmonkey.io/form/qGiDBZqRF5NuWyaqw2T4VD', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: `${nameInput.value} ${lastNameInput.value}`, 
                email: emailInput.value, 
                participante: selectedParticipant.children[1].innerText, 
                cidade: selectedParticipant.lastElementChild.innerText
            })
        })

    }
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Voto confirmado",
        showConfirmButton: false,
        timer: 3000
    })
    setTimeout(function() {
        location.reload()
    }, 3000)
})