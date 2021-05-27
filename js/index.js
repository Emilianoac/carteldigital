import {disenadores} from './disenadores.js'

function seleccionarColor(idInput , arrayItemColores) {
    let nuevoColor = document.querySelector(idInput).value;
    document.querySelector(idInput).style.backgroundColor = nuevoColor;
    document.querySelector(idInput).style.backgroundImage = 'unset';

    for (const el of arrayItemColores) {
        if (el.nodeName != 'P') {
 
        } else {
            el.style.color = nuevoColor;
        }

        if (el.nodeName != 'H4') {
 
        } else {
            el.style.color = nuevoColor;
        }

        if (el.nodeName == 'DIV') {
            el.style.backgroundColor = nuevoColor;
        }
    }
}

function restaurarColores() {

    disenadores.forEach(el => {
        el.COLOR_PICKER_PRIMARIO.dataset.currentColor = el.PRIMARIO_VALUE;
        el.COLOR_PICKER_PRIMARIO.value = el.PRIMARIO_VALUE;
        el.COLOR_PICKER_PRIMARIO.style.backgroundImage = `linear-gradient(to right, ${el.PRIMARIO_VALUE} 0%, ${el.PRIMARIO_VALUE} 38px, rgba(0, 0, 0, 0) 39px, rgba(0, 0, 0, 0) 100%)`;
        el.COLOR_PICKER_PRIMARIO.style.backgroundColor = 'unset';

        for (const item of el.ARRAY_COLORES_PRIMARIOS) {
            if (item.nodeName == 'P') {
                item.style.color = el.PRIMARIO_VALUE;
            }
    
            if(item.nodeName != 'P') {
                item.style.backgroundColor = el.PRIMARIO_VALUE;
            }
        }

        el.COLOR_PICKER_SECUNDARIO.dataset.currentColor = el.SECUNDARIO_VALUE;
        el.COLOR_PICKER_SECUNDARIO.value = el.SECUNDARIO_VALUE;
        el.COLOR_PICKER_SECUNDARIO.style.backgroundImage = `linear-gradient(to right, ${el.SECUNDARIO_VALUE} 0%, ${el.SECUNDARIO_VALUE} 38px, rgba(0, 0, 0, 0) 39px, rgba(0, 0, 0, 0) 100%)`;
        el.COLOR_PICKER_SECUNDARIO.style.backgroundColor = 'unset';

        for (const item of el.ARRAY_COLORES_SECUNDARIOS) {
            if (item.nodeName == 'P' || item.nodeName == 'H4') {
                item.style.color = el.SECUNDARIO_VALUE;
            }
    
            if(item.nodeName != 'P' && item.nodeName != 'H4') {
                item.style.backgroundColor = el.SECUNDARIO_VALUE;
            }
        }

        if (el.COLOR_PICKER_COMPLEMENTARIO == undefined) {

        } else {
    
            el.COLOR_PICKER_COMPLEMENTARIO.dataset.currentColor = el.COMPLEMENTARIO_VALUE;
            el.COLOR_PICKER_COMPLEMENTARIO.value = el.COMPLEMENTARIO_VALUE;
            el.COLOR_PICKER_COMPLEMENTARIO.style.backgroundImage = `linear-gradient(to right, ${el.COMPLEMENTARIO_VALUE} 0%, ${el.COMPLEMENTARIO_VALUE} 38px, rgba(0, 0, 0, 0) 39px, rgba(0, 0, 0, 0) 100%)`;
            el.COLOR_PICKER_COMPLEMENTARIO.style.backgroundColor = 'unset';
        
            for (const item of el.ARRAY_COLORES_COMPLEMENTARIOS) {
                item.style.color = el.COMPLEMENTARIO_VALUE;
                if(item.nodeName == 'DIV') {
                    item.style.backgroundColor = el.COMPLEMENTARIO_VALUE;
                }
            }
        }
    
    });
}

function reproducirAnimacion(el, btnReproducir, delay) {

    el.classList.remove('animacion')
    btnReproducir.style.userSelect = 'none';

    setTimeout( () => {
        el.classList.add('animacion')
        btnReproducir.style.userSelect = 'unset';
    }, delay)
}

disenadores.forEach(el => {
    el.COLOR_PICKER_PRIMARIO.addEventListener('input',function(){seleccionarColor(el.INPUT_PRIMARIO, el.ARRAY_COLORES_PRIMARIOS)})
    el.COLOR_PICKER_SECUNDARIO.addEventListener('input',function(){seleccionarColor(el.INPUT_SECUNDARIO, el.ARRAY_COLORES_SECUNDARIOS)})
    el.COLOR_PICKER_COMPLEMENTARIO.addEventListener('input',function(){seleccionarColor(el.INPUT_COMPLEMENTARIO, el.ARRAY_COLORES_COMPLEMENTARIOS)})

    el.RESTAURAR_COLORES.addEventListener('click', restaurarColores)
    window.addEventListener('load', restaurarColores);

    el.REPRODUCIR.addEventListener('click', function(){reproducirAnimacion(el.TRIGGER_ANIMACION, el.REPRODUCIR, el.DELAY)});
})


document.addEventListener('DOMContentLoaded', () => {
    setTimeout( () => {
        disenadores.forEach(el => {
            el.COLOR_PICKER_PRIMARIO.style.opacity = '1'
            el.COLOR_PICKER_SECUNDARIO.style.opacity = '1'
            el.COLOR_PICKER_COMPLEMENTARIO.style.opacity = '1'
        })
    }, 900)
})
