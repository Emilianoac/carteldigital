export function reproduccion(cartel, play, delay) {
    cartel.classList.remove('animacion');
    play.style.userSelect = 'none';

    setTimeout( () => {
        cartel.classList.add('animacion');
        play.style.userSelect = 'unset';
    }, delay)
}

export default function reproduccionListener(play , cartel, delay) {
    play.addEventListener('click', () => reproduccion(cartel, play, delay))
}


 