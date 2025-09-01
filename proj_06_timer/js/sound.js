export default function() {

const buttonPressAudio = new Audio ("./audio/audios_button-press.wav") 
//https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true
const kitchenTimer = new Audio ("./audio/audios_kichen-timer.mp3") 
//https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true
const bgAudio = new Audio ("./audio/audios_bg-audio.mp3")
//"https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"

bgAudio.loop = true

function pressButton(){
    buttonPressAudio.play()
}
function timeEnd(){
    kitchenTimer.play()
}

return{
    pressButton
    ,timeEnd
    ,bgAudio
}


}