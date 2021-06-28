export const carteles = []
const $carteles = document.querySelectorAll(".cartel");
const cartelesArray = Array.from($carteles);

cartelesArray.forEach( cartel => {
    const itemsColoreables = Array.from(cartel.querySelectorAll("[data-color]"));
    const inputsPickers = Array.from(cartel.querySelector(".controles__color").querySelectorAll("input"));
    carteles.push({
        items_primarios: itemsColoreables.filter(color => color.dataset.color == "primario"),
        items_secundarios: itemsColoreables.filter(color => color.dataset.color == "secundario"),
        items_complem: itemsColoreables.filter(color => color.dataset.color == "complementario"),

        input_primario: inputsPickers[0],
        input_secundario: inputsPickers[1],
        input_complem: inputsPickers[2],

        default_primario: inputsPickers[0].dataset.defaultprimario,
        default_secundario: inputsPickers[1].dataset.defaultsecundario,
        default_complem: inputsPickers[2].dataset.defaultcomplementario,

        play: cartel.querySelector('.control_reproduccion'),
        restaurar : cartel.querySelector('.control_restauracion'),
        cartel: cartel.querySelector('[data-cartel]'),
        delay: cartel.querySelector('.delay').value,
    })
});
