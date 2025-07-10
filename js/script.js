/* Scripts usados en las diferentes páginas del sitio */
import { showPage } from './showPage.js';
import { injector } from './injectHtml.js';
import { cargarCarrito } from './cargarCarrito.js';
import { enviarFormulario } from './enviarFormulario.js';
import { mostrarCategoria } from './mostrarCategoria.js';
import { conectarBotonVaciar } from './conectarBotonVaciar.js';

// desabilitar todos los mensajes DEBUG
// console.log = function () {};

document.addEventListener('DOMContentLoaded', async () => {

    await injector('../template/head.html', 'head');
    await injector('../template/header.html', 'header');
    await injector('../template/nav.html', 'nav');
    await injector('../template/footer.html', 'footer');
    await injector('index2.html', '#ContentPlaceholder');

    const navlinks = document.querySelectorAll(".navlink");

    let link = "";

    cargarCarrito();

    for (let navlink of navlinks) {
        navlink.addEventListener('click', async (event) => {
            event.preventDefault();
            link = event.currentTarget.dataset.link;

            if(link == "checkout")
            {
                document.getElementById('shoppingcart').style.pointerEvents = "none";
                document.getElementById('shoppingcart').style.opacity = "0.3";
            }
            else
            {
                document.getElementById('shoppingcart').style.pointerEvents = "auto";
                document.getElementById('shoppingcart').style.opacity = "1";
            }

            // checkout.html ///////////////////
            if (link == "checkout") {
                document.title = "Checkout | Insuma SRL";
                await showPage('checkout.html', '#ContentPlaceholder');

                let carrito = await cargarCarrito();
                let sumaTotal = 0.0;
                const checkoutresumen = document.getElementById('checkoutresumen');
                const cartelsumatotal = document.getElementById('sumatotal');
                console.log(checkoutresumen);

                if (carrito.lenght != 0) {
                    carrito.forEach(item => {
                        let listItem = document.createElement('li');
                        sumaTotal += parseFloat(item.subtotal);

                        let precioFormateado = '$ ' + item.precio.toLocaleString('es-AR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        });

                        let subtotalFormateado = '$ ' + item.subtotal.toLocaleString('es-AR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        });
                        listItem.innerHTML = `${item.producto} (${item.codigo}) [${item.cantidad} x ${precioFormateado}] ... ${subtotalFormateado} \n`
                        checkoutresumen.appendChild(listItem);
                    })


                    let cartelsumatotalFormateado = '$ ' + sumaTotal.toLocaleString('es-AR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })

                    cartelsumatotal.innerHTML = cartelsumatotalFormateado;
                    


                }


                // Agregamos un evento para el boton enviar formulario
                const botonEnviar = document.querySelector('#botonEnviar');
                if (botonEnviar) {
                    botonEnviar.addEventListener('click', enviarFormulario);
                }
                else {
                    console.log("ADVERTENCIA: No se encontró el botón con ID 'botonEnviar'.");
                }

                conectarBotonVaciar();

            }

            // contacto.html ///////////////////
            if (link == "contacto" || window.location.pathname.split('/')[1] == "contacto") {
                document.title = "Contacto | Insuma SRL";
                await showPage('contacto.html', '#ContentPlaceholder');



                conectarBotonVaciar();

                await cargarCarrito();
            }

            // index.html ///////////////////
            if (link == "index" || link == "") {
                document.title = "Insuma SRL";
                await showPage('index2.html', '#ContentPlaceholder');

                let botonentrar = document.querySelector('#entrar');
                if (botonentrar) {
                    botonentrar.addEventListener('click', async () => {
                        document.title = "Productos | Insuma SRL";
                        await showPage('productos.html', '#ContentPlaceholder');

                        let data = null;
                        let categoria = data || null;

                        // Gestion de vista de categorias:
                        const linkscategorias = document.querySelectorAll('.liCategorias');

                        categoria = linkscategorias.forEach(link => {
                            link.addEventListener('click', (event) => {
                                event.preventDefault();
                                let target = event.currentTarget;
                                data = target.dataset.categoria;

                                categoria = data || null;

                                mostrarCategoria(categoria);
                            })
                        })

                        conectarBotonVaciar();

                        await cargarCarrito();
                    })
                }
            }

            // productos.html ///////////////////
            if (link == "productos") {
                document.title = "Productos | Insuma SRL";
                await showPage('productos.html', '#ContentPlaceholder');
            
                let data = null;
                let categoria = data || null;

                // Gestion de vista de categorias:

                const linkscategorias = document.querySelectorAll('.filtracategoria');
                categoria = linkscategorias.forEach(link => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        let target = event.currentTarget;
                        data = target.dataset.categoria;

                        categoria = data || null;

                        mostrarCategoria(categoria);

                    })
                })


                conectarBotonVaciar();

                await cargarCarrito();
            }



            // quienessomos.html ///////////////////
            if (link == "quienessomos") {
                document.title = "Quienes somos | Insuma SRL";
                await showPage('quienessomos.html', '#ContentPlaceholder');

                conectarBotonVaciar();

                await cargarCarrito();

            }

            // resenas.html ///////////////////
            if (link == "resenas") {
                document.title = "Reseñas | Insuma SRL";
                await showPage('resenas.html', '#ContentPlaceholder');

                conectarBotonVaciar();

                await cargarCarrito();

            }

            // ubicacion.html ///////////////////
            if (link == "ubicacion") {
                document.title = "Ubicación | Insuma SRL";
                await showPage('ubicacion.html', '#ContentPlaceholder');

                conectarBotonVaciar();

                await cargarCarrito();
            }

        })


        let botonentrar = document.querySelector('#entrar');
        if (botonentrar) {
            botonentrar.addEventListener('click', async () => {
                document.title = "Productos | Insuma SRL";
                await showPage('productos.html', '#ContentPlaceholder');

                let data = null;
                let categoria = data || null;

                // Gestion de vista de categorias:
                const linkscategorias = document.querySelectorAll('.liCategorias');

                categoria = linkscategorias.forEach(link => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        let target = event.currentTarget;
                        data = target.dataset.categoria;

                        categoria = data || null;

                        mostrarCategoria(categoria);
                    })
                })

                conectarBotonVaciar();

                await cargarCarrito();
            })
        }
    }

})

