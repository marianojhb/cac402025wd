import { mostrarCategoria } from "./mostrarCategoria.js";

export async function muestraProductos() {

    const linkscategorias = document.querySelectorAll('.filtracategoria');

    linkscategorias.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.currentTarget;
            let categoria = target.dataset.categoria;
            // target.classList.add('animate__animated', 'animate__lightSpeedOutRight');
            target.classList.add('animate__animated', 'animate__flipOutX');

            target.addEventListener('animationend', () => {
                mostrarCategoria(categoria);
                target.classList.add('animate__flipInX');
                target.classList.remove('animate__flipOutX');
                 }, { once: true }); // solo una vez
            // 
            }
            )
        })




        const gridcategoriaitem = document.querySelectorAll('.gridcategoriaitem');
        gridcategoriaitem.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                let target = event.currentTarget;
                let categoria = target.dataset.categoria;
                target.classList.add('animate__animated', 'animate__flipOutY');

                target.addEventListener('animationend', () => {
                    mostrarCategoria(categoria);


                    target.classList.add('animate__flipInY');
                    mostrarCategoria(categoria);
                }, { once: true }); // solo una vez


            })
        })
    }