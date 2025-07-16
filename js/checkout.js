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

        let botonesEliminarItemEnCheckout = document.getElementsByClassName('eliminarItemEnCheckout') || null; // un objeto 

        Object.values(botonesEliminarItemEnCheckout).forEach( (boton, index)=> {
            boton.addEventListener('click', ()=> {
                carrito.splice(index, 1);
                document.getElementsByClassName('licheckout')[index].style.display = "none";
                localStorage.setItem('carrito', JSON.stringify(carrito))
                let nuevoSubtotal = carrito.reduce( (acumulador, i) => acumulador + i.subtotal, 0);
                let nuevaCantidad = carrito.reduce( (acumulador, i) => acumulador + 1, 0);
                document.querySelector('#indicadorCantidadItems').innerHTML = nuevaCantidad;
                let nuevoSubtotalFormateado = '$ ' + nuevoSubtotal.toLocaleString('es-AR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
                cartelsumatotal.innerHTML = `${nuevoSubtotalFormateado}<button class="eliminarItemEnCheckout" style="visibility: hidden;"><i class="fa-solid fa-xmark"></i></button>`;

                cargarCarrito();
                
            })
        })
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