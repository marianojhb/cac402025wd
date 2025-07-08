// HTML injection
export function showPage(url, target) {
  return fetch(url)
    .then(res => res.text())
    .then(html => {
      const elemento = document.querySelector(target);
      if (elemento) {
        elemento.innerHTML=html;
      } else {
        console.warn(`No se encontró el selector: ${target}`);
      }
    })
    .catch(error => {
      console.error(`Error al inyectar ${url}:`, error);
    });
}
