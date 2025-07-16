/* Scripts usados en las diferentes páginas del sitio */
import { showPage } from './showPage.js';
import { injector } from './injectHtml.js';
import { cargarCarrito } from './cargarCarrito.js';
import { conectarBotonVaciar } from './conectarBotonVaciar.js';
import { muestraProductos } from './muestraProductos.js';
import { conectarBotonesCheckout } from './conectarBotonesCheckout.js';
import { checkout } from './checkout.js';

// desabilitar todos los mensajes DEBUG
// console.log = function () {};

document.addEventListener('DOMContentLoaded', async (event) => {

    await injector('./template/head.html', 'head');
    await injector('./template/header.html', 'header');
    await injector('./template/nav.html', 'nav');
    await injector('./template/footer.html', 'footer');
    await injector('./index2.html', '#ContentPlaceholder');

    let themeToggler = document.getElementById('themeToggler');

    if (themeToggler) {
        await themeToggler.addEventListener('click', async () => {
            if (themeToggler.classList.contains('fa-moon')) {
                themeToggler.classList.add('fa-sun');
                document.body.classList.add('theme-light');
                themeToggler.classList.remove('fa-moon');
                document.body.classList.remove('theme-dark');
            } else {
                themeToggler.classList.add('fa-moon');
                document.body.classList.add('theme-dark');
                themeToggler.classList.remove('fa-sun');
                document.body.classList.remove('theme-light');
            }
        })
    } else {
        console.warn('⚠️ themeToggler not found in DOM');
    }



    // Pagina inicial

    let botonentrar = document.querySelector('#entrar');

    if (botonentrar) {

        botonentrar.addEventListener('click', async () => {

            document.getElementById('ContentPlaceholder').dataset.page = 'productos';

            document.title = "Productos | Insuma SRL";

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

                document.title = "Insuma SRL";

                document.getElementById('ContentPlaceholder').dataset.page = 'index';

                await showPage('index2.html', '#ContentPlaceholder');

                let botonentrar = document.querySelector('#entrar');

                if (botonentrar) {

                    botonentrar.addEventListener('click', async () => {

                        document.title = "Productos | Insuma SRL";

                        await showPage('productos.html', '#ContentPlaceholder');

                        muestraProductos();

                    })
                }
            }

            // productos.html ///////////////////
            if (link == "productos") {

                document.getElementById('ContentPlaceholder').dataset.page = 'productos';

                document.title = "Productos | Insuma SRL";

                await showPage('productos.html', '#ContentPlaceholder');

                muestraProductos();

            }

            // checkout.html ///////////////////
            if (link == "checkout") {

                document.title = "Checkout | Insuma SRL";
                document.getElementById('ContentPlaceholder').dataset.page = 'checkout';


                await showPage('checkout.html', '#ContentPlaceholder');

                checkout();

            }

            // contacto.html ///////////////////
            if (link == "contacto" || window.location.pathname.split('/')[1] == "contacto") {

                document.getElementById('ContentPlaceholder').dataset.page = 'contacto';


                document.title = "Contacto | Insuma SRL";

                await showPage('contacto.html', '#ContentPlaceholder');

            }

            // ayuda.html ///////////////////
            if (link == "ayuda" || window.location.pathname.split('/')[1] == "ayuda") {

                document.getElementById('ContentPlaceholder').dataset.page = 'ayuda';


                document.title = "Ayuda | Insuma SRL";

                await showPage('ayuda.html', '#ContentPlaceholder');

            }



            // quienessomos.html ///////////////////
            if (link == "quienessomos") {

                document.getElementById('ContentPlaceholder').dataset.page = 'quienessomos';

                document.title = "Quienes somos | Insuma SRL";

                await showPage('quienessomos.html', '#ContentPlaceholder');

            }

            // resenas.html ///////////////////
            if (link == "resenas") {

                document.getElementById('ContentPlaceholder').dataset.page = 'resenas';

                document.title = "Reseñas | Insuma SRL";

                await showPage('resenas.html', '#ContentPlaceholder');

            }

            // ubicacion.html ///////////////////
            if (link == "ubicacion") {

                document.getElementById('ContentPlaceholder').dataset.page = 'ubicacion';

                document.title = "Ubicación | Insuma SRL";

                await showPage('ubicacion.html', '#ContentPlaceholder');

            }

        })


    }


    conectarBotonVaciar();

    await cargarCarrito();

    conectarBotonesCheckout();



})

