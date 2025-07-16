export function ocultarShoppingCart() {
    let sc = document.getElementById('shoppingcart');
    sc.classList.add('force-hide');
    sc.addEventListener('mouseenter', () => {
        sc.classList.remove('force-hide');
    });
}