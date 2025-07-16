import { showPage } from "./showPage.js";
import { muestraProductos } from "./muestraProductos.js";

export async function cargarCarrito() {

    // Ubico el lugar donde se va a cargar
    let olcarrito = document.querySelector('#listado ol');
    if (!olcarrito) {
        console.warn("No se encontró el listado del carrito");
        return;
    }
    olcarrito.innerHTML = '';

    // Creo la variable JSON del carrito
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Cartel de no hay elementos en el carrito
    let divresumen = document.querySelector('#resumen');

    if (carrito.length == 0) {
        divresumen.style = "border-top: 0px";
        divresumen.innerHTML = '<em>No hay items en el carrito.</em>';
    }

    // Recorro el JSON

    let cantidadArticulos = 0;
    let total = 0;

    carrito.forEach((item, index) => {
        // creo las variables:
        const li = document.createElement('li');

        let nuevoSubtotalFormateado = '$ ' + item.subtotal.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        li.innerHTML =
            `<span class="truncate">(${item.cantidad}) <em>${item.producto}</em></span>
            <span style="margin-left: auto; margin-right: 1em;"> ${nuevoSubtotalFormateado}</span>
            <button data-itemorder='${index}' class="eliminarItem"><i class="fa-solid fa-xmark"></i></button>`;
        olcarrito.appendChild(li);

        total += parseFloat(item.subtotal);
        cantidadArticulos += parseInt(item.cantidad);
    });



    let nuevoTotalFormateado = '$ ' + total.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });


    divresumen.innerHTML = `<strong>Total</strong><span style="margin-left: auto; margin-right: 1em"><strong>${nuevoTotalFormateado}</strong></span><button class="eliminarItem" style="visibility: hidden; "><i class="fa-solid fa-xmark"></i></button>`;
    divresumen.style.borderTop = "1px solid #aaaaaa";

    // Actualizo el data-cantidad del resumen
    const indicadorCantidadItems = document.querySelector('#indicadorCantidadItems');
    indicadorCantidadItems.innerHTML = cantidadArticulos;


    // le agrego un manejador a los botones eliminar
    let botonesCarrito = document.getElementsByClassName('eliminarItem');
    Object.values(botonesCarrito).forEach((boton, index) => {
        boton.addEventListener('click', () => {

            boton.parentElement.style.display = "none";
            carrito.splice(index, 1)
            localStorage.setItem('carrito', JSON.stringify(carrito));

            let nuevoTotal = carrito.reduce((acumulador, item) => acumulador + item.subtotal, 0);

            let nuevoTotalFormateado = '$ ' + nuevoTotal.toLocaleString('es-AR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

            let nuevaCantidad = carrito.reduce((acumulador, item) => acumulador + 1, 0);
            divresumen.innerHTML = `<strong>Total</strong><span style="margin-left: auto; margin-right: 1em"><strong>${nuevoTotalFormateado}</strong></span><button class="eliminarItem" style="visibility: hidden; "><i class="fa-solid fa-xmark"></i></button>`;
            indicadorCantidadItems.innerHTML = nuevaCantidad;

            if (document.getElementById('ContentPlaceholder').dataset.page == 'checkout') {
                document.getElementsByClassName('licheckout')[index].style.display = "none";
                document.getElementById('sumatotal').innerHTML = `${nuevoTotalFormateado}<button class="eliminarItemEnCheckout" style="visibility: hidden;"><i class="fa-solid fa-xmark"></i></button>`;
            }


        });
    });


    return carrito;

}