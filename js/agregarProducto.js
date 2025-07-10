    import { cargarCarrito } from "./cargarCarrito.js";
    
    export function agregarProducto(event)
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
        let item = {
          categoria: event.target.getAttribute('data-categoria'),
          producto: event.target.getAttribute('data-producto'),
          codigo: codigo,
          stock: stock,
          precio: parseFloat(event.target.getAttribute('data-precio')),
          cantidad: cantidad,
          imagen: event.target.getAttribute('data-imagen'),
          subtotal: subtotal
        };
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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