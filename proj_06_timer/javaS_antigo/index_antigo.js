import {hideShow, hideShowStop, hideShowSet} from "../js/controls.js"
import {countdown, updateTimerDisplay, resetTimer, minutesDisplay, secondsDisplay, minutes, timerTimeOut} from "./timer_antigo.js"

//DOM
export const buttonPlay         = document.querySelector('.play')
export const buttonPause        = document.querySelector('.pause')
export const buttonSet          = document.querySelector('.set')
export const buttonStop         = document.querySelector('.stop')
export const buttonSound_on     = document.querySelector('.sound-on')
export const buttonSound_off    = document.querySelector('.sound-off')
/**Botoes */


buttonPlay.addEventListener("click", function () {
    hideShowStop(buttonPlay, buttonPause, buttonSet, buttonStop);
    countdown(secondsDisplay,minutesDisplay);
});

buttonPause.addEventListener("click", function () {
    hideShow(buttonPlay, buttonPause)
    clearTimeout(timerTimeOut);

});

buttonStop.addEventListener("click", function () {
    hideShowSet(buttonPlay, buttonPause, buttonStop, buttonSet)
    resetTimer();
});


buttonSet.addEventListener('click', function () {
    let newMinutes = prompt('Quantos minutos?')
    if (!Number(newMinutes)) {
        resetTimer()
        return
    }
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})

buttonSound_on.addEventListener("click", () => hideShow(buttonSound_on, buttonSound_off));
buttonSound_off.addEventListener("click", () => hideShow(buttonSound_on, buttonSound_off));



