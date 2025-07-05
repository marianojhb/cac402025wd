// Vaciar Carrito
  function vaciarCarrito() {
    // elimina los nodos <li> del carrito de compras, si tuviera el ol:
    const olcarrito = document.querySelector('#listado ol');
    olcarrito.hasChildNodes() && (olcarrito.innerHTML = "");
    
    // avisa que esta vacío ahora:
    const divresumen = document.querySelector('#resumen');
    divresumen.innerHTML = '<em>No hay items en el carrito.</em>';

    // vacía la key de localStorage
    localStorage.setItem('carrito', null)

    // vuelve a 0 el data-total del div resumen
    divresumen.setAttribute('data-total', 0);
  }
