import { vaciarCarrito } from './vaciarCarrito.js';
import { showPage } from './showPage.js';

export function conectarBotonVaciar() {
    const botonVaciar = document.querySelector('#btnVaciarCarrito');
    if (botonVaciar) {
        botonVaciar.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation(); // evitar propagación al navlink
            vaciarCarrito();

            if (document.getElementById('ContentPlaceholder').dataset.page == 'checkout')
            {

                showPage('checkout.html', '#ContentPlaceholder');
            }





        });
    } else {
        console.error("No se encontró el botón con id 'btnVaciarCarrito'");
    }
}