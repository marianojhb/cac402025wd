    function agregarProducto(event)
    {
      const olcarrito = document.querySelector('#listado ol');
      let codigo = event.target.getAttribute('data-codigo');
      let cantidad = parseFloat(document.querySelector(`#${codigo}`).value);
      let subtotal = parseFloat(event.target.getAttribute('data-precio')) * cantidad;
      let stock=  parseInt(event.target.getAttribute('data-stock'));
      let producto = null;

      
      
      if (cantidad > 0 && cantidad <= stock)
      {
        // si hay stock para agregar al carrito

        // armo el diccionario item
        item = {
          categoria: event.target.getAttribute('data-categoria'),
          producto: event.target.getAttribute('data-producto'),
          codigo: codigo,
          stock: stock,
          precio: parseFloat(event.target.getAttribute('data-precio')),
          cantidad: cantidad,
          imagen: event.target.getAttribute('data-imagen'),
          subtotal: subtotal
        };
 
        // Obtengo el cartel resumen del carrito 
        // const divresumen = document.querySelector('#resumen');   
        // let totalactual = parseFloat(divresumen.getAttribute('data-total')) ;
        // if (totalactual == 0) divresumen.innerHTML = "";
        // let nuevoTotal = (totalactual + subtotal);
        
        // divresumen.setAttribute('data-total', nuevoTotal);
        
        // // le aplico formato al numero:
        // let nuevoTotalFormateado = '$ ' + nuevoTotal.toLocaleString('es-AR', {
        //       minimumFractionDigits: 2,
        //       maximumFractionDigits: 2
        //     });   

        // divresumen.innerHTML = `<span><strong>Total:</strong></span><span><strong>${nuevoTotalFormateado}</strong></span>`;
        
        // // Agrego el item a la vista
        // let li = document.createElement('li');

        // // le aplico formato al numero:
        // let subtotalFormateado = '$ ' + item.subtotal.toLocaleString('es-AR', {
        //       minimumFractionDigits: 2,
        //       maximumFractionDigits: 2
        // });
        
        // li.innerHTML = 
        //   `<span><em>${item.producto}</em> (${item.cantidad})</span><span>${subtotalFormateado}</span>`;
        // olcarrito.appendChild(li);
        
        // Agrego un item al JSON localStorage 
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(item);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarCarrito();
      } 
      else
      // si no hay stock para agregar al carrito
      {
        alert('No hay suficiente cantidad en stock');
      }
      
      
      
    }