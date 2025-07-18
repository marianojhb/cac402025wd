export function conectarBotonShoppingCart()
{
    const shoppingcart = document.getElementById('shoppingcart');
    const divcarrito = document.getElementById('divcarrito');
    if (shoppingcart) {
        shoppingcart.addEventListener('click', () => {
            divcarrito.classList.toggle("hidden");
            divcarrito.classList.toggle("visible");
        })
    }
    
    
    document.addEventListener('click', (event) => {
        if (divcarrito.classList.contains("visible")) {
            if ( !divcarrito.contains(event.target) && !shoppingcart.contains(event.target)) {
                divcarrito.classList.add("hidden");
                divcarrito.classList.remove("visible");    
                
            }
            
        }
    });
    // conectarBotonShoppingCart();

}