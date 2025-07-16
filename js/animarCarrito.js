export function animarCarrito ()
{
        const cartIcon = document.getElementById('cart-icon');
        cartIcon.classList.remove('cart-pop'); // Reset in case it's still there
        void cartIcon.offsetWidth;             // Force reflow
        cartIcon.classList.add('cart-pop');
    

}