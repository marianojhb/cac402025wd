export function ubicarElementoHTML(selector, html) {
    const contenedor = document.querySelector(selector);
    contenedor.insertAdjacentHTML('beforeend', html);
}