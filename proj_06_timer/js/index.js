import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sound.js"
import Events from "./events.js"
import {
    buttonPlay     
    ,buttonPause    
    ,buttonSet      
    ,buttonStop     
    ,minutesDisplay 
    ,secondsDisplay 
} from "./elements.js"


const sound = Sound()
const controls = Controls()        
const timer = Timer({ 
        minutesDisplay,
        secondsDisplay,
        buttonPlay,
        buttonPause,
        buttonStop,
        buttonSet
})


Events({controls, timer, sound})