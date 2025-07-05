    function agregarProducto(event)
    {
      const olcarrito = document.querySelector('#listado ol');
      let codigo = event.target.getAttribute('data-codigo');
      let cantidad = document.querySelector(`#${codigo}`).value;
      let subtotal = parseFloat(event.target.getAttribute('data-precio')) * cantidad;
      let stock=  parseInt(event.target.getAttribute('data-stock'));
      let producto = null;

      
      
      if (cantidad <= stock)
      {
        // si hay stock para agregar al carrito'

        // armo el diccionario item
        item = {
          categoria: event.target.getAttribute('data-categoria'),
          producto: event.target.getAttribute('data-producto'),
          codigo: codigo,
          stock: stock,
          precio: parseFloat(event.target.getAttribute('data-precio')),
          cantidad: parseFloat(cantidad),
          imagen: event.target.getAttribute('data-imagen'),
          subtotal: subtotal
        };
 
        // Obtengo el cartel resumen del carrito y 
        // Actualizo el data-cantidad del resumen
        const divresumen = document.querySelector('#resumen');   
        let totalactual = parseFloat(divresumen.getAttribute('data-total'));
        if (totalactual == 0) divresumen.innerHTML = "";
        let nuevoTotal = totalactual + cantidad;
        divresumen.setAttribute('data-total', nuevoTotal);
        

        // Agrego un registro a la vista
        let li = document.createElement('li');
        li.innerHTML = `${item.producto} ${item.cantidad} $${item.subtotal}`;
        olcarrito.appendChild(li);
        
        // Agrego un item al JSON localStorage 
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(item);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        console.log(localStorage.getItem('carrito'));

      } 
      else
      // si no hay stock para agregar al carrito
      {
        alert('No hay suficiente cantidad en stock');
      }
      
      
      
    }