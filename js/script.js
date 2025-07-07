/* Scripts usados en las diferentes páginas del sitio */
import { injector } from './injectHtml.js';
import { agregarProducto } from './agregarProducto.js';
import { cargarCarrito } from './cargarCarrito.js';
import { crearElementoHTML } from './crearElementoHTML.js';
import { enviarFormulario } from './enviarFormulario.js';
import { getProductos } from './getProductos.js';
import { ubicarElementoHTML} from './ubicarElementoHTML.js';
import { vaciarCarrito } from './vaciarCarrito.js';



document.addEventListener('DOMContentLoaded', async ()=>{
    
    await injector('./template/head.html','head');
    await injector('./template/header.html','header');
    await injector('./template/footer.html','footer');
    


    // checkout.html ///////////////////

    if(window.location.pathname.includes("checkout.html"))
    {
        
        
    }
    
    
    
    // contacto.html ///////////////////

    if (window.location.pathname.includes("contacto.html"))
    {
        // Gestion Carrito de compras: Vaciar
        
        const botonVaciar = document.querySelector('#btnVaciarCarrito');
        if (botonVaciar)
        {
            botonVaciar.addEventListener('click', vaciarCarrito);
        }
        else 
        {
            console.error("No se encontró el botón con id 'btnVaciarCarrito'");
        }
        // Gestion Carrito de compras: Llenar
        cargarCarrito();
    }



    // index.html ///////////////////
    
    if(window.location.pathname.includes("index.html"))
    {
              // Gestion Carrito de compras: Vaciar

        const botonVaciar = document.querySelector('#btnVaciarCarrito');
        if (botonVaciar)
        {
            botonVaciar.addEventListener('click', vaciarCarrito);
        }
        else 
        {
            console.error("No se encontró el botón con id 'btnVaciarCarrito'");
        }
        // Gestion Carrito de compras: Llenar
        cargarCarrito();
    }           
    
    
    
    // productos.html ///////////////////
    
    if(window.location.pathname.includes("productos.html"))
    {
              
      // Gestion de vista de categorias:
      const params = new URLSearchParams(window.location.search);
      const value = params.get('cat') || 'all';
      let categoria = null;
      let carrito = null;

      switch(value) 
        {
            case 'all':
                console.log("Seleccionaste todos los productos");
                categoria = '';
                break;
            case 'chapas':
                console.log("Seleccionaste chapas");
                document.title = "Chapas | " + document.title;
                categoria = 'chapas';
                break;
            case 'aislaciones':
                console.log("Seleccionaste aislaciones");
                document.title = "Aislaciones | " + document.title;
                categoria = 'aislaciones';
                break;
            case 'construccionenseco':
                console.log("Seleccionaste construccionenseco");
                document.title = "Construcción en seco | " + document.title;
                categoria = 'construccionenseco';
                break;
            case 'estructurales':
                console.log("Seleccionaste estructurales");
                document.title = "Estructurales | " + document.title;
                categoria = 'estructurales';
                break;

            default:
              console.log("Categoría no reconocida");
              categoria = null;
              break;
      }


      getProductos(categoria).then(productosFiltrados => {
        const contenedor = document.querySelector('#contenido');
        contenedor.innerHTML = ''; // limpiar antes

        if (productosFiltrados.length === 0) {
          contenedor.innerHTML = '<p>No se encontraron productos.</p>';
          return;
        }
        
        productosFiltrados.forEach(element => {
          const tarjeta = crearElementoHTML(element);
          ubicarElementoHTML('#contenido', tarjeta);
        });

        // Gestión de Carrito de Compras: agregar evento a los botones de Agregar
        document.querySelectorAll('.btnAgregar').forEach(boton => {
          boton.addEventListener('click', agregarProducto);
        });


      });
      

      // Gestion Carrito de compras: Vaciar
      
      const botonVaciar = document.querySelector('#btnVaciarCarrito');
     if (botonVaciar)
      {
        botonVaciar.addEventListener('click', vaciarCarrito);
      }
      else 
      {
        console.error("No se encontró el botón con id 'btnVaciarCarrito'");
      }
      // Gestion Carrito de compras: Llenar
      cargarCarrito();


    }



    // quienessomos.html ///////////////////
    
    if(window.location.pathname.includes("quienessomos.html"))
    {
        
    }



    // resenas.html ///////////////////
    
    if(window.location.pathname.includes("resenas.html"))
    {
                // Gestion Carrito de compras: Vaciar
        
          const botonVaciar = document.querySelector('#btnVaciarCarrito');
          if (botonVaciar)
          {
              botonVaciar.addEventListener('click', vaciarCarrito);
          }
          else 
          {
              console.error("No se encontró el botón con id 'btnVaciarCarrito'");
          }
          // Gestion Carrito de compras: Llenar
          cargarCarrito();

    }



    // ubicacion.html ///////////////////

    if(window.location.pathname.includes("ubicacion.html"))
    {
              // Gestion Carrito de compras: Vaciar
      
        const botonVaciar = document.querySelector('#btnVaciarCarrito');
        if (botonVaciar)
        {
            botonVaciar.addEventListener('click', vaciarCarrito);
        }
        else 
        {
            console.error("No se encontró el botón con id 'btnVaciarCarrito'");
        }
        // Gestion Carrito de compras: Llenar
        cargarCarrito();
    }

            
            




});

