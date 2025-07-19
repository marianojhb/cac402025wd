let shoppingCartListenerAttached = false;
let globalClickListenerAttached = false;

// Function to reset shopping cart state
export function resetShoppingCartState() {
    const shoppingcart = document.getElementById('shoppingcart');
    const divcarrito = document.getElementById('divcarrito');
    
    if (shoppingcart && divcarrito) {
        // Remove any problematic classes
        shoppingcart.classList.remove('force-hide');
        divcarrito.classList.add('hidden');
        divcarrito.classList.remove('visible');
    }
}

export function conectarBotonShoppingCart() {
    const shoppingcart = document.getElementById('shoppingcart');
    const divcarrito = document.getElementById('divcarrito');

    if (!shoppingcart || !divcarrito) {
        console.warn('Shopping cart elements not found');
        return;
    }

    // Reset the state first
    resetShoppingCartState();

    // Only attach the shopping cart click event listener once
    if (!shoppingCartListenerAttached) {
        shoppingcart.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event bubbling
            
            // Remove force-hide class if it exists
            shoppingcart.classList.remove('force-hide');
            
            // Toggle cart visibility
            divcarrito.classList.toggle("hidden");
            divcarrito.classList.toggle("visible");
        });
        
        shoppingCartListenerAttached = true;
    }
    
    // Global click handler to close cart when clicking outside - only attach once
    if (!globalClickListenerAttached) {
        document.addEventListener('click', (event) => {
            const currentDivCarrito = document.getElementById('divcarrito');
            const currentShoppingCart = document.getElementById('shoppingcart');
            
            if (currentDivCarrito && currentDivCarrito.classList.contains("visible")) {
                if (!currentDivCarrito.contains(event.target) && !currentShoppingCart.contains(event.target)) {
                    currentDivCarrito.classList.add("hidden");
                    currentDivCarrito.classList.remove("visible");    
                }
            }
        });
        
        globalClickListenerAttached = true;
    }
}