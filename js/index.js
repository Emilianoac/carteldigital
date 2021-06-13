import {carteles} from './modulos/data_carteles.js';
import seleccionColorListener from './modulos/seleccionar_color.js';
import restaurarColoresListener, {restaurarColores} from './modulos/restaurar_colores.js';
import reproduccionListener from './modulos/reproducir_animacion.js';

carteles.forEach( cartel => {
    seleccionColorListener(cartel.input_primario, cartel.items_primarios);
    seleccionColorListener(cartel.input_secundario, cartel.items_secundarios);
    seleccionColorListener(cartel.input_complem, cartel.items_complem);
    reproduccionListener(cartel.play, cartel.cartel, cartel.delay);
    restaurarColoresListener(cartel.restaurar)
})

window.addEventListener('load',() => {
    restaurarColores()
    setTimeout( () => {
        carteles.forEach(cartel => {
            cartel.input_primario.style.opacity = '1';
            cartel.input_secundario.style.opacity = '1';
            cartel.input_complem.style.opacity = '1';
        })
    }, 900)
});
