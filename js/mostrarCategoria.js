import { getProductos } from "./getProductos.js";
import { cargarCarrito } from "./cargarCarrito.js";
import { crearElementoHTML } from "./crearElementoHTML.js"
import { ubicarElementoHTML } from "./ubicarElementoHTML.js";
import { agregarProducto } from "./agregarProducto.js";

export async function mostrarCategoria(categoria) {
    if (!categoria) categoria = '';

    console.log("Mostrando categoría:", categoria);

    const productosFiltrados = await getProductos(categoria);

    const contenedor = document.querySelector('#contenido');
    contenedor.innerHTML = '';

    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const tarjeta = crearElementoHTML(producto);
        ubicarElementoHTML('#contenido', tarjeta);
    });

    document.querySelectorAll('.btnAgregar').forEach(boton => {
        boton.addEventListener('click', agregarProducto);
    });

}
