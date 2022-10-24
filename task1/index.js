

function onInputUpdate (vol){
const output  = document.querySelector('#volume');
output.value = vol

    let box = document.querySelector('.cards');
    box.style.gap = vol + 'px'

}

function onColorChange (val){
    let box = document.querySelector('.cards');
    box.style.backgroundColor = val
}

function onColorChangeIn (val, ev){
    ev.path[1].style.backgroundColor = val
}

function buttonColor (val, ev){
    ev.path[1].style.backgroundColor = val
}