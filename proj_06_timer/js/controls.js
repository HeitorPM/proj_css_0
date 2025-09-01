export default function () {
    /** Funcções para esconde e mostrar botoes */
    function hideShow(...elements) {
        elements.forEach(el => el.classList.toggle("hide"))
    }

    function hideShowStop(el1, el2, el3, el4) {
        hideShow(el1, el2)
        if (el4.classList.contains('hide')) {
            el3.classList.add('hide')
            el4.classList.remove('hide')
        }
    }

    //se o 1º parametro tiver hide, faça um toggle com o ele (1º e 2º param)
    //no fim faça toggle como o terceiro e quarto
    function hideShowSet(ply, paus, stp, st) {
        if (ply.classList.contains('hide')) {
            hideShow(ply, paus)
        }
        hideShow(stp, st)
    }

   function getMinutes() {
    
        let newMinutes = prompt('Quantos minutos?')
        if (!Number(newMinutes)) {
            return false
        }
        return newMinutes
    }


return {
    hideShow,
    hideShowStop,
    hideShowSet
    ,getMinutes
}
}

// togglePair(play, pause)
// togglePair(sound_on, sound_off)
// togglePair(set, stop)


// function togglePair(el1, el2) {
//     el1.addEventListener("click", () => hideShow(el1, el2))
//     el2.addEventListener("click", () => hideShow(el1, el2))
// }

// function toggleTriple(el1, el2, el3) {
//     el1.addEventListener("click", () => hideShow(el1, el2))
//     el2.addEventListener("click", () => hideShow(el1, el2))
// }


// function hideShow(el1, el2) {
//     el1.classList.toggle('hide')
//     el2.classList.toggle('hide')
// }