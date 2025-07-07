export function cargarCarrito()
{
    // Ubico el lugar donde se va a cargar
    let olcarrito = document.querySelector('#listado ol');
    if (!olcarrito) {
        console.warn("No se encontró el listado del carrito");
        return;
    }
    olcarrito.innerHTML = '';
    
    // Creo la variable JSON del carrito
    let carrito =  JSON.parse(localStorage.getItem('carrito')) || [];

    // Cartel de no hay elementos en el carrito
    let divresumen = document.querySelector('#resumen');

    if (carrito.length == 0) 
    {
        divresumen.style = "border-top: 0px";
        divresumen.innerHTML = '<p>No se encontraron productos.</p>';
    }

    // Recorro el JSON
    
    let cantidadArticulos = 0;
    let total = 0;

    carrito.forEach(item => {
        // creo las variables:
        const li = document.createElement('li');

        let nuevoSubtotalFormateado = '$ ' + item.subtotal.toLocaleString('es-AR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });  


        li.innerHTML = 
        `<span>(${item.cantidad}) <em>${item.producto}</em></span><span> ${nuevoSubtotalFormateado}</span>`;
        olcarrito.appendChild(li);

        total += parseFloat(item.subtotal);
        cantidadArticulos += parseInt(item.cantidad);

    });

        let nuevoTotalFormateado = '$ ' + total.toLocaleString('es-AR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });  
    

    divresumen.innerHTML = `<strong>Total</strong><strong>${nuevoTotalFormateado}</strong>`; 
    divresumen.style.borderTop  = "1px solid #aaaaaa";

    // Actualizo el data-cantidad del resumen
    const indicadorCantidadItems = document.querySelector('#indicadorCantidadItems');
    indicadorCantidadItems.innerHTML = cantidadArticulos;











    return carrito;

}