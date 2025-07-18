export function conectarBotonShoppingCart()
{
    const lishoppingcart = document.getElementById('lishoppingcart');
    const divcarrito = document.getElementById('divcarrito');
    if (lishoppingcart) {
        lishoppingcart.addEventListener('click', () => {
            divcarrito.classList.toggle("hidden");
            divcarrito.classList.toggle("visible");
        })
    }
    
    
    document.addEventListener('click', (event) => {
        if (divcarrito.classList.contains("visible")) {
            if ( !divcarrito.contains(event.target) && !lishoppingcart.contains(event.target)) {
                divcarrito.classList.add("hidden");
                divcarrito.classList.remove("visible");    
                
            }
            
        }
    });
    // conectarBotonShoppingCart();

}