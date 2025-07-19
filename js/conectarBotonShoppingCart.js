export function conectarBotonShoppingCart()
{
    const shoppingcart = document.getElementById('shoppingcart');
    const divcarrito = document.getElementById('divcarrito');

    if (!shoppingcart || !divcarrito) return;

    
    shoppingcart.addEventListener('click', (event) => {
        event.stopPropagation();
        divcarrito.classList.toggle("hidden");
            divcarrito.classList.toggle("visible");
    })

    divcarrito.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    
    document.addEventListener('click', (event) => {

            if (divcarrito.classList.contains("visible")) 
            {
                if ( !divcarrito.contains(event.target) && 
                    !shoppingcart.contains(event.target) ) 
                {
                    divcarrito.classList.add("hidden");
                    divcarrito.classList.remove("visible");    
                }
                
            }

    });

}