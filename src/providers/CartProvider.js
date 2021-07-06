import { useState } from 'react';
import CartContext from '../context/CartContext';
export default function CartProvider({ defaultValue = [], defaultAmount = 0, children }) {
    const [cart, setCart] = useState(defaultValue);
    const [totalItems, setTotalItems] = useState(defaultAmount);

    function addItem(item, amount) {
        item.amount = amount;
        if (isInCart(item.id)) {
            console.log("el item ya se encuentra en el carrito");
        } else {
            setCart([...cart, item]);
            setTotalItems(totalItems + amount);
        };
    }

    function removeItem(itemId) {
        let cartDeepCopy = [...cart];
        let index = cartDeepCopy.findIndex(item => item.id === itemId);
        cartDeepCopy.splice(index, 1);
        setCart(cartDeepCopy);

        let newTotalItems = 0
        cartDeepCopy.forEach((item) => {
            newTotalItems += item.amount;
        });
        setTotalItems(newTotalItems);
    }

    function clear() {
        setCart([]);
        setTotalItems(0);
    }

    function isInCart(id) {
        return cart.find(x => x.id === id);
    }

    function getTotalPrice() {
        let totalPrice = 0;
        cart.map((item) => {
            totalPrice += (item.amount * item.price)
        });
        return totalPrice;
    }
    function getTotalItems() {
        let totalItems = 0;
        cart.map((item) => {
            totalItems += item.amount;
        });
        return totalItems;
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getTotalItems, getTotalPrice }}>
        {children}
    </CartContext.Provider>
}