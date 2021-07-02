import { useState } from 'react';
import CartContext from '../context/CartContext';
export default function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState(defaultValue);

    function addItem(item, amount) {
        item.amount = amount;
        isInCart(item.id) ? console.log("el item ya se encuentra en el carrito") : setCart([...cart, item]);
    }

    function removeItem(itemId) {
        let index = cart.findIndex(item => item.id === itemId);
        setCart(cart.splice(index, 1));
    }

    function clear() {
        setCart([]);
    }

    function isInCart(id) {
        return cart.find(x => x.id === id);
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
        {children}
    </CartContext.Provider>
}