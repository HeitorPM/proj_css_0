import {hideShowSet} from "../js/controls.js"
import {buttonPlay , buttonPause, buttonSet, buttonStop} from "../js/index.js"
export const minutesDisplay = document.querySelector('.minutes')
export const secondsDisplay = document.querySelector('.seconds')
export let minutes = Number(minutesDisplay.textContent)
export let timerTimeOut


export function countdown(secondsDisplay,minutesDisplay  ) {
    timerTimeOut = setTimeout(function () {
        let secon = Number(secondsDisplay.textContent)
        let minut = Number(minutesDisplay.textContent)

        if (minut == 0 && secon == 0) {
            hideShowSet(buttonPlay, buttonPause, buttonStop, buttonSet)
            return
        }
        if (secon <= 0) {
            secon = 2
            minut--
            //UpdateTimerDisplay(String(minutes - 1), seconds) //n funciona pq n altera a variavel inciial
        }
        updateTimerDisplay(minut, String(secon - 1))
        countdown(secondsDisplay,minutesDisplay)
    }, 1000)
}

export function updateTimerDisplay(min, sec) {
    minutesDisplay.textContent = String(min).padStart(2, "0")
    secondsDisplay.textContent = String(sec).padStart(2, "0")
}

export function resetTimer() {
    clearTimeout(timerTimeOut)
    updateTimerDisplay(minutes, 0)
}