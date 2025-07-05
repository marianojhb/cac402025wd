function cargarCarrito()
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

    (carrito == []) && (divresumen.innerHTML = '<p>No se encontraron productos.</p>');

    // Recorro el JSON
    
    carrito.forEach(item => {
        // creo las variables:
        let total = 0;
        const li = document.createElement('li');

        li.innerHTML = 
        `<em>${item.producto}</em> - (${item.cantidad}) <strong>$${item.subtotal}</strong>`;
        
        olcarrito.appendChild(li);

    });


}