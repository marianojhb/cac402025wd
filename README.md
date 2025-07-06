# Proyecto HTML+CSS+JS vanilla de Carrito de Compras

### Presentado en el curso Codo a Codo 4.0 del Ministerio de Educación de la Ciudad de Buenos Aires
https://talentotech.bue.edu.ar

## Contenido
Se utilizaron los assets de una web ecommerce existente para obtener un listado de productos con fotos. Los campos usados: categoría, descripción, stock, precio unitario y una imagen.

## Resumen
### Interactividad Completa:

- La página permite al usuario ver productos, añadirlos al carrito, editar el carrito, y simular la compra.

### Formulario de Contacto:

- Implementa un formulario funcional que envía datos a través de Formspree.

### Diseño Responsivo:

- El diseño es adaptable a diferentes tamaños de pantalla.

### Persistencia del Carrito:

- El carrito se mantiene activo incluso si el usuario cierra o actualiza la página, usando localStorage o sessionStorage.

## Tecnologías usadas
- HTML5 + CSS3
    - Grid & Flexbox
    - Sección "Productos": Organizada en cards de forma responsiva utilizando Flexbox
    - Sección "Reseñas": Organizada utilizando Grid, con una distribución lógica y estética.
    - Sección "Contacto": Debe ser responsiva mediante el uso de Media Queries para adaptarse a diferentes tamaños de pantalla.
    - Variables CSS para temas (light, dark, etc)
    - Sitio responsivo
    - Estilos básicos aplicados a las secciones de header, footer y lista de navegación.
    - Fuentes de Google Fonts correctamente implementadas
    - Archivo CSS externo
    - Contenido Multimedia y Navegación
    - Multimedia: archivos multimedia (imagenes, video o iframe) correctamente integrado en la página
    - Lista de navegación: Implementar una lista desordenada con enlaces que simulen una navegación interna (Inicio, Productos, Contacto, etc.)

- JavaScript vanilla
    - Sin frameworks
    - Variables de sesión y almacenamiento local
    - Carrito de compras
    - se modularizaron las funciones
    - se creo un sistema de templates propio
    - Script.js: archivos .js para manejar toda la interactividad de la página.
    - DOM funciones para validar formularios (ej., campos requeridos y formato de correo).
    - Visualización de Productos: cada producto tiene su imagen, título y precio, muestra una lista atractiva para el usuario.
    - Carrito de compras dinámico. Carrito de compras donde los usuarios puedan añadir productos desde las tarjetas.
    - Uso de localStorage o sessionStorage: Guarda el estado del carrito en localStorage o sessionStorage para que no se pierda al actualizar o cerrar la página
    - Contador Dinámico: Muestra el número total de productos en el carrito y actualizar en tiempo real
    - Edición y visualización del carrito.
    - Visualización de Productos en el Carrito: Muestra una lista de productos añadidos al carrito, incluyendo cantidad, precio y total.
    - Edición de Cantidades y Eliminación de Productos: Implementa funciones para que el usuario pueda editar la cantidad de cada producto o eliminarlo del carrito.
    - Total Dinámico: Actualiza el total de la compra cada vez que se modifiquen los productos en el carrito.
- Asincronismo
    - Fetch Api
    - Muestra los productos obtenidos de la API en la página en forma de tarjetas (cards) desde un JSON
- SEO & Accesibilidad
    - Alt en las imágenes para mejorar la accesibilidad
    - Metaetiquetas en el head del HTML para optimizar el SEO
- Formspree para el envio de formulario
- GitHub + GitHub pages para el deployment

