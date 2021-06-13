import {carteles} from './data_carteles.js';

const restaurarColor = (input, defaultColor, items) => {
    input.dataset.currentColor = defaultColor;
    input.value = defaultColor;
    input.style.backgroundImage = `linear-gradient(to right, ${defaultColor} 0%, ${defaultColor} 38px, rgba(0, 0, 0, 0) 39px, rgba(0, 0, 0, 0) 100%)`;
    input.style.backgroundColor = 'unset';

    for (const item of items) {
        if (item.nodeName == 'P' || item.nodeName == 'H4') item.style.color = defaultColor;
        else item.style.backgroundColor = defaultColor;
    }
}

export function restaurarColores() {
    carteles.forEach(el => {
        restaurarColor(el.input_primario, el.default_primario, el.items_primarios);
        restaurarColor(el.input_secundario, el.default_secundario, el.items_secundarios);
        restaurarColor(el.input_complem, el.default_complem, el.items_complem);
    });
}

export default function restaurarColoresListener(restaurarBtn) {
    restaurarBtn.addEventListener('click', restaurarColores)
}

