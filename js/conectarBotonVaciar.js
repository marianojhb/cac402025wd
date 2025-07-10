import { vaciarCarrito } from './vaciarCarrito.js';

export function conectarBotonVaciar() {
    const botonVaciar = document.querySelector('#btnVaciarCarrito');
    if (botonVaciar) {
        botonVaciar.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation(); // evitar propagación al navlink
            vaciarCarrito();
        });
    } else {
        console.error("No se encontró el botón con id 'btnVaciarCarrito'");
    }
}