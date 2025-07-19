export function ocultarShoppingCart() {
    let sc = document.getElementById('shoppingcart');
    let divcarrito = document.getElementById('divcarrito');
    
    if (sc && divcarrito) {
        // Hide the cart immediately
        divcarrito.classList.add("hidden");
        divcarrito.classList.remove("visible");
        
        // Add force-hide class temporarily
        sc.classList.add('force-hide');
        
        // Remove force-hide on mouseenter to allow normal functionality
        const removeForceHide = () => {
            sc.classList.remove('force-hide');
            sc.removeEventListener('mouseenter', removeForceHide);
        };
        
        sc.addEventListener('mouseenter', removeForceHide);
        
        // Also remove force-hide after a short delay to ensure normal functionality
        setTimeout(() => {
            sc.classList.remove('force-hide');
        }, 1000);
    }
}