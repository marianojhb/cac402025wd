import { ocultarShoppingCart } from "./ocultarShoppingCart.js";
import { showPage } from "./showPage.js";
import { muestraProductos } from "./muestraProductos.js";

export function conectarBotonesCheckout() {


    btnCheckout.addEventListener('click', () => {
        ocultarShoppingCart();
    });

    btnSeguirComprando.addEventListener('click', async () => {

        await showPage('productos.html', '#ContentPlaceholder');
        
        document.querySelector('#ContentPlaceholder').dataset.page = "products";
        
        muestraProductos();
        
        ocultarShoppingCart();
    });   


    btnVaciarCarrito.addEventListener('click', () => {
        setTimeout(() => {
            ocultarShoppingCart();

        }, 1000)
    });

}
