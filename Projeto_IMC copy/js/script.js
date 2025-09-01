import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { notNumber, calculateIMC } from "./util.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// submissao
form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }



    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

//tirando a critica ao escrever no campo
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


// focus do campo c enter
inputWeight.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()// impede envio do form, pq enter no form envia por default
        inputHeight.focus()// pula pro próximo campo
    }
})