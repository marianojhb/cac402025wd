import { ocultarShoppingCart } from "./ocultarShoppingCart.js";
import { showPage } from "./showPage.js";
import { muestraProductos } from "./muestraProductos.js";

export function conectarBotonesCheckout() {


    btnCheckout.addEventListener('click', () => {
        ocultarShoppingCart();
         
    });

    // Boton seguir comprando
    btnSeguirComprando.addEventListener('click', async () => {

        await showPage('productos.html', '#ContentPlaceholder');
        
        document.querySelector('#ContentPlaceholder').dataset.page = "products";
        
        muestraProductos();
        
        const divcarrito = document.getElementById('divcarrito');
        divcarrito.classList.toggle("hidden");
        divcarrito.classList.toggle("visible");
        container[0].classList.remove("backdrop");

       
    });   


    btnVaciarCarrito.addEventListener('click', () => {
        setTimeout(() => {
            ocultarShoppingCart();
            
            const container = document.getElementsByClassName('container');
             container[0].classList.remove("backdrop");

        }, 1000)
    });

}
