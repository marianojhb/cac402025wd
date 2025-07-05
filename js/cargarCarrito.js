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

    // Recorro el JSON
    
    carrito.forEach(item => {
        // creo las variables:
        let total = 0;
        const li = document.createElement('li');

        li.innerHTML = 
        `<em>${item.producto}</em> ${item.cantidad} ${item.precio} ${item.subtotal}`;
        
        olcarrito.appendChild(li);

    });


}