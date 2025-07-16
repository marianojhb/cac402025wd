import { cargarCarrito } from "./cargarCarrito.js";
import { enviarFormulario } from "./enviarFormulario.js";
import { muestraProductos } from "./muestraProductos.js";
import { showPage } from "./showPage.js";
import { ocultarShoppingCart } from "./ocultarShoppingCart.js";


export async function checkout() {
    let carrito = await cargarCarrito();
    if (!carrito.length) {
        alert("El carrito está vacío.");
        await showPage('productos.html', '#ContentPlaceholder');
        muestraProductos();
        ocultarShoppingCart();
        return;
    }
    let sumaTotal = 0.0;
    const checkoutresumen = document.getElementById('checkoutresumen');
    const cartelsumatotal = document.getElementById('sumatotal');


    if (carrito.lenght != 0) {
        carrito.forEach((item, index) => {
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
            listItem.classList.add('licheckout');
            listItem.dataset.item = index;
            listItem.innerHTML = `<div>
                                        ${item.producto}<br>
                                        código: ${item.codigo} [${item.cantidad} x ${precioFormateado}]
                                        </div>
                                    <div">
                                        <br>
                                        ${subtotalFormateado} 
                                        <button class="eliminarItemEnCheckout" 
                                                data-item=${index}
                                                >
                                                <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>`
            checkoutresumen.appendChild(listItem);
        })


        let cartelsumatotalFormateado = '$ ' + sumaTotal.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        cartelsumatotal.innerHTML = `${cartelsumatotalFormateado}<button class="eliminarItemEnCheckout" style="visibility: hidden;"><i class="fa-solid fa-xmark"></i></button>`;

        recargar();

        function recargar() {


            let botonesEliminarItemEnCheckout = document.getElementsByClassName('eliminarItemEnCheckout'); // un objeto 

            Array.from(botonesEliminarItemEnCheckout).forEach((boton) => {
                boton.addEventListener('click', async (event) => {

                    const index = parseInt(event.currentTarget.dataset.item);

                    if (isNaN(index)) return;

                    // Remover visual con animación
                    const li = document.getElementsByClassName('licheckout')[index];
  
                    // Actualiza datos
                    carrito.splice(index, 1);

                    localStorage.setItem('carrito', JSON.stringify(carrito));

                    let nuevoSubtotal = carrito.reduce((acumulador, i) => acumulador + i.subtotal, 0);
                    let nuevaCantidad = carrito.reduce((acumulador, i) => acumulador + 1, 0);

                    document.querySelector('#indicadorCantidadItems').innerHTML = nuevaCantidad;


                    let nuevoSubtotalFormateado = '$ ' + nuevoSubtotal.toLocaleString('es-AR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })

                    cartelsumatotal.innerHTML = `${nuevoSubtotalFormateado}<button class="eliminarItemEnCheckout" style="visibility: hidden;"><i class="fa-solid fa-xmark"></i></button>`;
                    
                    checkoutresumen.innerHTML = '';

                    checkout();
                    // document.getElementsByClassName('licheckout')[index].style.display = "none";
                    // cargarCarrito(); // para el carrito de compras del nav


                    // console.log(index); // TODO: el indice se tienen que resetear para que sincronice con el carrito del nav
                })
            })
        }
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