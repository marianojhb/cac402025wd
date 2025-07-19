import { ocultarShoppingCart } from "./ocultarShoppingCart.js";
import { showPage } from "./showPage.js";
import { muestraProductos } from "./muestraProductos.js";
import { resetShoppingCartState } from "./conectarBotonShoppingCart.js";

export function conectarBotonesCheckout() {

    const btnCheckout = document.getElementById('btnCheckout');
    const btnSeguirComprando = document.getElementById('btnSeguirComprando');
    const btnVaciarCarrito = document.getElementById('btnVaciarCarrito');

    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            ocultarShoppingCart();
        });
    } else {
        console.warn('btnCheckout not found');
    }

    if (btnSeguirComprando) {
        btnSeguirComprando.addEventListener('click', async () => {

            await showPage('productos.html', '#ContentPlaceholder');
            
            document.querySelector('#ContentPlaceholder').dataset.page = "productos";
            
            muestraProductos();
            
            // Reset shopping cart state instead of just hiding it
            resetShoppingCartState();

        });   
    } else {
        console.warn('btnSeguirComprando not found');
    }

    if (btnVaciarCarrito) {
        btnVaciarCarrito.addEventListener('click', () => {
            setTimeout(() => {
                // Reset shopping cart state instead of just hiding it
                resetShoppingCartState();

            }, 1000)
        });
    } else {
        console.warn('btnVaciarCarrito not found');
    }

}
