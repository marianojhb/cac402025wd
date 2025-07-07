export function enviarFormulario(event) {
    event.preventDefault();

    // chequeamos que se completó todo:
    const nombreContacto = document.getElementById('nombre').value.trim();
    const apellidoContacto = document.getElementById('apellido').value.trim();
    const emailContacto = document.getElementById('email').value.trim();

    if (!nombreContacto || !apellidoContacto || !emailContacto) {
        alert("Por favor, completá todos los datos de contacto antes de enviar.");
        return;
    }


    // Completamos los textarea con el detalle de la compra
    let carrito = cargarCarrito();
    if (!carrito.length) {
        alert("El carrito está vacío.");
        return;
    }       
    let sumaTotal = 0.0;
    let resumen = "";

    for (let item of carrito) {
        sumaTotal += parseFloat(item.subtotal);

        let precioFormateado = '$ ' + item.precio.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        let subtotalFormateado = '$ ' + item.subtotal.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


        resumen += `${item.codigo} ${item.producto} [${item.cantidad} x ${precioFormateado}] ... ${subtotalFormateado} \n`;
    }
    document.getElementById("carritoData").value = resumen;

    let sumaTotalFormateado = '$ ' + sumaTotal.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    document.getElementById("carritoTotal").value = `Total ${sumaTotalFormateado}`;

    // enviamos
    document.getElementById('checkout').submit();
    console.log("Resumen del pedido:\n" + resumen);
}