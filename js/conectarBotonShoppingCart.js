export function conectarBotonShoppingCart()
{
    const shoppingcart = document.getElementById('shoppingcart');
    const divcarrito = document.getElementById('divcarrito');
    const container = document.getElementsByClassName('container');

    if (!shoppingcart || !divcarrito) return;

    document.addEventListener('click', (event) => {


        if (divcarrito.classList.contains("visible")) 
            {
                if ( !divcarrito.contains(event.target) && 
                    !shoppingcart.contains(event.target) ) 
                {
                    divcarrito.classList.add("hidden");
                    divcarrito.classList.remove("visible"); 
                    container[0].classList.remove("backdrop");   
                }
                
            }

    });
    
    shoppingcart.addEventListener('click', (event) => {
        event.stopPropagation();
        if(divcarrito.classList.contains("visible")) return;
        divcarrito.classList.toggle("hidden");
        divcarrito.classList.toggle("visible");
        container[0].classList.add("backdrop");
        
    })
    

    divcarrito.addEventListener('click', (event) => {
        event.stopPropagation();
    });

}