/* Scripts usados en las diferentes páginas del sitio */
import { showPage } from './showPage.js';
import { injector } from './injectHtml.js';
import { agregarProducto } from './agregarProducto.js';
import { cargarCarrito } from './cargarCarrito.js';
import { crearElementoHTML } from './crearElementoHTML.js';
import { enviarFormulario } from './enviarFormulario.js';
import { getProductos } from './getProductos.js';
import { ubicarElementoHTML } from './ubicarElementoHTML.js';
import { vaciarCarrito } from './vaciarCarrito.js';


document.addEventListener('DOMContentLoaded', async () => {

    await injector('../template/head.html', 'head');
    await injector('../template/header.html', 'header');
    await injector('../template/footer.html', 'footer');
    await injector('index2.html', '#ContentPlaceholder');

    const navlinks = document.querySelectorAll(".navlink");


    let link = "";



    for (let navlink of navlinks) {
        navlink.addEventListener('click', async (event) => {
            event.preventDefault();
            link = event.currentTarget.dataset.link;

            // checkout.html ///////////////////
            if (link == "checkout") {
                await showPage('checkout.html', '#ContentPlaceholder');
                const botonVaciar = document.querySelector('#btnVaciarCarrito');
                if (botonVaciar) {
                    botonVaciar.addEventListener('click', vaciarCarrito);
                }
                else {
                    console.error("No se encontró el botón con id 'btnVaciarCarrito'");
                }
                // Agregamos un evento para el boton enviar formulario
                const botonEnviar = document.querySelector('#botonEnviar');
                if (botonEnviar) {
                    botonEnviar.addEventListener('click', enviarFormulario);
                }
                else {
                    console.log("ADVERTENCIA: No se encontró el botón con ID 'botonEnviar'.");
                }
            }

            // contacto.html ///////////////////
            if (link == "contacto") {
                await showPage('contacto.html', '#ContentPlaceholder');
                // Gestion Carrito de compras: Vaciar

                const botonVaciar = document.querySelector('#btnVaciarCarrito');
                if (botonVaciar) {
                    botonVaciar.addEventListener('click', vaciarCarrito);
                }
                else {
                    console.error("No se encontró el botón con id 'btnVaciarCarrito'");
                }
                // Gestion Carrito de compras: Llenar
                cargarCarrito();
            }

            // index.html ///////////////////
            if (link == "index" || link == "") {
                await showPage('index2.html', '#ContentPlaceholder');
                // Gestion Carrito de compras: Vaciar
                const botonVaciar = document.querySelector('#btnVaciarCarrito');
                if (botonVaciar) {
                    botonVaciar.addEventListener('click', vaciarCarrito);
                }
                else {
                    console.error("No se encontró el botón con id 'btnVaciarCarrito'");
                }
                // Gestion Carrito de compras: Llenar
                cargarCarrito();
            }

            // productos.html ///////////////////
            if (link == "productos") {
                await showPage('productos.html', '#ContentPlaceholder');
                await showPage('categorias.html','#contenido')

                // Gestion de vista de categorias:
                const linkscategorias = document.querySelectorAll('.liCategorias');
                console.log(linkscategorias);
                linkscategorias.forEach(link => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        let target = event.currentTarget;
                        let data = target.dataset.categoria;

                        let categoria = data || null;
                        let carrito = null;

                        switch (data) {
                            case 'all':
                                console.log("Seleccionaste todos los productos");
                                categoria = '';
                                break;
                            case 'chapas':
                                console.log("Seleccionaste chapas");
                                document.title = "Chapas | " + document.title;
                                categoria = 'chapas';
                                break;
                            case 'aislaciones':
                                console.log("Seleccionaste aislaciones");
                                document.title = "Aislaciones | " + document.title;
                                categoria = 'aislaciones';
                                break;
                            case 'construccionenseco':
                                console.log("Seleccionaste construccionenseco");
                                document.title = "Construcción en seco | " + document.title;
                                categoria = 'construccionenseco';
                                break;
                            case 'estructurales':
                                console.log("Seleccionaste estructurales");
                                document.title = "Estructurales | " + document.title;
                                categoria = 'estructurales';
                                break;

                            default:
                                console.log("Categoría no reconocida");
                                categoria = null;
                                break;
                        }


                        getProductos(categoria).then(productosFiltrados => {
                            const contenedor = document.querySelector('#contenido');
                            contenedor.innerHTML = ' '; // limpiar antes

                            if (productosFiltrados.length === 0) {
                                contenedor.innerHTML = '<p>No se encontraron productos.</p>';
                                return;
                            }

                            productosFiltrados.forEach(element => {
                                const tarjeta = crearElementoHTML(element);
                                ubicarElementoHTML('#contenido', tarjeta);
                            });

                            // Gestión de Carrito de Compras: agregar evento a los botones de Agregar
                            document.querySelectorAll('.btnAgregar').forEach(boton => {
                                boton.addEventListener('click', agregarProducto);
                            });


                        });


                        // Gestion Carrito de compras: Vaciar

                        const botonVaciar = document.querySelector('#btnVaciarCarrito');
                        if (botonVaciar) {
                            botonVaciar.addEventListener('click', vaciarCarrito);
                        }
                        else {
                            console.error("No se encontró el botón con id 'btnVaciarCarrito'");
                        }
                        // Gestion Carrito de compras: Llenar
                        cargarCarrito();


                    })

                })
            }


            // quienessomos.html ///////////////////
            if (link == "quienessomos") {
                await showPage('quienessomos.html', '#ContentPlaceholder');
                const botonVaciar = document.querySelector('#btnVaciarCarrito');
                if (botonVaciar) {
                    botonVaciar.addEventListener('click', vaciarCarrito);
                }
                else {
                    console.error("No se encontró el botón con id 'btnVaciarCarrito'");
                }
                cargarCarrito();

            }

            // resenas.html ///////////////////
            if (link == "resenas") {
                await showPage('resenas.html', '#ContentPlaceholder');
                // Gestion Carrito de compras: Vaciar

                const botonVaciar = document.querySelector('#btnVaciarCarrito');
                if (botonVaciar) {
                    botonVaciar.addEventListener('click', vaciarCarrito);
                }
                else {
                    console.error("No se encontró el botón con id 'btnVaciarCarrito'");
                }
                // Gestion Carrito de compras: Llenar
                cargarCarrito();

            }

            // ubicacion.html ///////////////////
            if (link == "ubicacion") {
                await showPage('ubicacion.html', '#ContentPlaceholder');

                // Gestion Carrito de compras: Vaciar

                const botonVaciar = document.querySelector('#btnVaciarCarrito');
                if (botonVaciar) {
                    botonVaciar.addEventListener('click', vaciarCarrito);
                }
                else {
                    console.error("No se encontró el botón con id 'btnVaciarCarrito'");
                }
                // Gestion Carrito de compras: Llenar
                cargarCarrito();
            }

        })
    }




})

