
function seleccionColor(input, ItemColores) {
    const nuevoColor = input.value;
    input.style.backgroundColor = nuevoColor;
    input.style.backgroundImage = 'unset';

    for (const item of ItemColores) {
        if (item.nodeName == 'P' || item.nodeName == 'H4') item.style.color = nuevoColor;
        if (item.nodeName == 'DIV') item.style.backgroundColor = nuevoColor;
    }
}

export default function slecccionColorListener (input, items) {
    input.addEventListener('input', () => seleccionColor(input, items));
}