import {
    buttonPlay
    , buttonPause
    , buttonSet
    , buttonStop
    , buttonSound_on
    , buttonSound_off
} from "./elements.js"

export default function ({ controls, timer, sound }) {


    buttonPlay.addEventListener("click", function () {
        controls.hideShowStop(buttonPlay, buttonPause, buttonSet, buttonStop);
        timer.countdown();
        sound.pressButton()
    });

    buttonPause.addEventListener("click", function () {
        controls.hideShow(buttonPlay, buttonPause)
        timer.hold()
        sound.pressButton()

    });

    buttonStop.addEventListener("click", function () {
        controls.hideShowSet(buttonPlay, buttonPause, buttonStop, buttonSet) //verificar
        timer.reset();
        sound.pressButton()

    });

    buttonSet.addEventListener('click', function () {
        // let newMinutes = prompt('Quantos minutos?')
        let newMinutes = controls.getMinutes()
        if (!Number(newMinutes)) {
            timer.reset()
            return
        }

        //minutes = newMinutes //
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)

    })

    buttonSound_on.addEventListener("click", function () {
        controls.hideShow(buttonSound_on, buttonSound_off)
        sound.bgAudio.pause()

    })
        ;
    buttonSound_off.addEventListener("click", function () {
        controls.hideShow(buttonSound_on, buttonSound_off)
        sound.bgAudio.play()

    });

}
// buttonSet.addEventListener('click', function () {
//     let newMinutes = controls.getMinutes

//     if(!Number(newMinutes)){
//         timer.resetTimer()
//         return
//     }

//     minutes = newMinutes
//     timer.updateDisplay(minutes, 0)
// })



