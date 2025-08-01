/* Scripts usados en las diferentes páginas del sitio */
import { showPage } from './showPage.js';
import { injector } from './injectHtml.js';
import { cargarCarrito } from './cargarCarrito.js';
import { conectarBotonVaciar } from './conectarBotonVaciar.js';
import { muestraProductos } from './muestraProductos.js';
import { conectarBotonesCheckout } from './conectarBotonesCheckout.js';
import { checkout } from './checkout.js';
import { conectarBotonShoppingCart } from './conectarBotonShoppingCart.js';

// desabilitar todos los mensajes DEBUG
console.log = function () {};

document.addEventListener('DOMContentLoaded', async (event) => {

    await injector('./template/head.html', 'head');
    await injector('./template/header.html', 'header');
    await injector('./template/nav.html', 'nav');
    await injector('./template/footer.html', 'footer');
    await injector('./index2.html', '#ContentPlaceholder');

    let themeToggler = document.getElementById('themeToggler');


    if (themeToggler) {
        themeToggler.addEventListener('click', () => {
            document.body.classList.toggle("theme-dark");
            if (themeToggler.classList.contains('fa-moon')) {
                themeToggler.classList.replace('fa-moon', 'fa-sun');

            } else if (themeToggler.classList.contains('fa-sun')) {
                themeToggler.classList.replace('fa-sun', 'fa-moon');

            }
        });
    } else {
        console.warn(`No exite el elemento themeToggler`);
    }

    // Pagina inicial

    let botonentrar = document.querySelector('#entrar');

    if (botonentrar) {

        botonentrar.addEventListener('click', async () => {

            document.getElementById('ContentPlaceholder').dataset.page = 'productos';

            document.title = "Productos | Inzuma SRL";

            await showPage('productos.html', '#ContentPlaceholder');

            muestraProductos();

        })
    }



    // Menu

    const navlinks = document.querySelectorAll(".navlink");

    for (let navlink of navlinks) {

        navlink.addEventListener('click', async (event) => {
            event.preventDefault();
            let link = event.currentTarget.dataset.link;

            // index.html ///////////////////
            if (link == "index") {

                document.title = "Inzuma SRL";

                document.getElementById('ContentPlaceholder').dataset.page = 'index';

                await showPage('index2.html', '#ContentPlaceholder');

                let botonentrar = document.querySelector('#entrar');

                if (botonentrar) {

                    botonentrar.addEventListener('click', async () => {

                        document.title = "Productos | Inzuma SRL";

                        await showPage('productos.html', '#ContentPlaceholder');

                        muestraProductos();

                    })
                }
            }

            // productos.html ///////////////////
            if (link == "productos") {

                document.getElementById('ContentPlaceholder').dataset.page = 'productos';

                document.title = "Productos | Inzuma SRL";

                await showPage('productos.html', '#ContentPlaceholder');

                muestraProductos();

            }

            // checkout.html ///////////////////
            if (link == "checkout") {

                document.title = "Checkout | Inzuma SRL";
                document.getElementById('ContentPlaceholder').dataset.page = 'checkout';


                await showPage('checkout.html', '#ContentPlaceholder');

                checkout();

            }

            // contacto.html ///////////////////
            if (link == "contacto" || window.location.pathname.split('/')[1] == "contacto") {

                document.getElementById('ContentPlaceholder').dataset.page = 'contacto';


                document.title = "Contacto | Inzuma SRL";

                await showPage('contacto.html', '#ContentPlaceholder');

            }

            // ayuda.html ///////////////////
            if (link == "ayuda" || window.location.pathname.split('/')[1] == "ayuda") {

                document.getElementById('ContentPlaceholder').dataset.page = 'ayuda';


                document.title = "Ayuda | Inzuma SRL";

                await showPage('ayuda.html', '#ContentPlaceholder');

            }



            // quienessomos.html ///////////////////
            if (link == "quienessomos") {

                document.getElementById('ContentPlaceholder').dataset.page = 'quienessomos';

                document.title = "Quienes somos | Inzuma SRL";

                await showPage('quienessomos.html', '#ContentPlaceholder');

            }

            // resenas.html ///////////////////
            if (link == "resenas") {

                document.getElementById('ContentPlaceholder').dataset.page = 'resenas';

                document.title = "Reseñas | Inzuma SRL";

                await showPage('resenas.html', '#ContentPlaceholder');

            }

            // ubicacion.html ///////////////////
            if (link == "ubicacion") {

                document.getElementById('ContentPlaceholder').dataset.page = 'ubicacion';

                document.title = "Ubicación | Inzuma SRL";

                await showPage('ubicacion.html', '#ContentPlaceholder');

            }

        })


    }


    conectarBotonVaciar();

    await cargarCarrito();

    conectarBotonesCheckout();

    conectarBotonShoppingCart();



})

