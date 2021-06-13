export const carteles = []
const $carteles = document.querySelectorAll(".cartel");
const cartelesArray = Array.from($carteles);

cartelesArray.forEach( cartel => {
    const itemsColoreables = Array.from(cartel.querySelectorAll("[data-color]"));
    const inputsPickers = Array.from(cartel.querySelector(".barra-herramientas").querySelectorAll("input"));
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

        play: cartel.querySelector('.reproducir'),
        restaurar : cartel.querySelector('.restaurar-colores'),
        cartel: cartel.querySelector('[data-cartel]'),
        delay: cartel.querySelector('.delay').value,
    })
    console.log(inputsPickers[0].dataset)
});
