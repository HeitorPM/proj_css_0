let randomNumber = Number(Math.round(Math.random() * 10));
let xAttempts = 1;
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")


    let resultText = document.querySelector(".screen2 h2")
    resultText.innerText = `Acertou em ${xAttempts} tentativas! 🎉`


  }
  inputNumber.value = ""
  inputNumber.focus()
  xAttempts++
}


function reset(event) {
  event.preventDefault() //evita de atualizar a pg
  screen1.classList.add("hide") //adiciona a classe
  screen2.classList.remove("hide")
  inputNumber.value = "" // deixa em branco
  inputNumber.focus() // foca no campo
  xAttempts = 1;

}