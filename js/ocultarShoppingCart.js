export function ocultarShoppingCart() {
    let sc = document.getElementById('shoppingcart');
    sc.classList.add('force-hide');
    sc.addEventListener('mouseenter', () => {
        sc.classList.remove('force-hide');
        divcarrito.classList.add("hidden");
        divcarrito.classList.remove("visible");  
    });
}