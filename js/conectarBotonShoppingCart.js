export function conectarBotonShoppingCart()
{
    const btnshoppingcart = document.getElementById('btnshoppingcart');
    const divcarrito = document.getElementById('divcarrito');
    if (btnshoppingcart) {
        btnshoppingcart.addEventListener('click', () => {
            divcarrito.classList.toggle("hidden");
            divcarrito.classList.toggle("visible");
        })
    }
    
    
    document.addEventListener('click', (event) => {
        if (divcarrito.classList.contains("visible")) {
            if ( !divcarrito.contains(event.target) && !btnshoppingcart.contains(event.target)) {
                divcarrito.classList.add("hidden");
                divcarrito.classList.remove("visible");    
                
            }
            
        }
    });
    // conectarBotonShoppingCart();

}