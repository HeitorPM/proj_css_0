const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

// submissao
form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
}


// focus do campo
inputWeight.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()   // impede envio do form
        inputHeight.focus()           // pula pro próximo campo
    }
})

inputHeight.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        form.requestSubmit()
    }
})

// calculo
function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


//modalBtnClose.addEventListener('click', hide)

modalBtnClose.onclick = hide


// esconde o segundo modal ao fechar
function hide(modal) {
    modalWrapper.classList.remove('open')
}

/*
outra opcao seria
modalBtnClose.onclick = () =>{
    modalWrapper.classList.remove('open')
}
*/
