import Controls  from "./controls.js"
import Sounds from "./sound.js"

const controls = Controls()

export default function (
    {
        minutesDisplay,
        secondsDisplay,
        buttonPlay,
        buttonPause,
        buttonStop,
        buttonSet
    }) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ?minutes : newMinutes
        seconds = seconds === undefined ?  0 : seconds

        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
        clearTimeout(timerTimeOut)
        updateDisplay(minutes, 0)
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let secon = Number(secondsDisplay.textContent)
            let minut = Number(minutesDisplay.textContent)
            let isFinished = minut === 0 && secon === 0

            if (isFinished) {
                controls.hideShowSet(buttonPlay, buttonPause, buttonStop, buttonSet)
                reset()
                Sounds().timeEnd()

                return
            }
            if (secon <= 0) {
                secon = 2
                minut--
            }
            updateDisplay(minut, String(secon - 1))
            countdown(secondsDisplay, minutesDisplay)
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut);
    }
    return {
        countdown,
        reset,
        updateDisplay
        , updateMinutes
        , hold
    }
}