// HTML injection
export function injector(url, target) {
  return fetch(url)
    .then(res => res.text())
    .then(html => {
      const elemento = document.querySelector(target);
      if (elemento) {
        elemento.insertAdjacentHTML('afterbegin', html);
      } else {
        console.warn(`No se encontró el selector: ${target}`);
      }
    })
    .catch(error => {
      console.error(`Error al inyectar ${url}:`, error);
    });
}

