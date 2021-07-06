import './Cart.css';
import removeItemIcon from '../../assets/icons/close-outline.svg';
import CartContext from '../../context/CartContext';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext);
    return (
        <div className="cart-container">
            {cart.length > 0 ?
                <>
                    <h3>
                        Detalle de tu compra:
                    </h3>
                    <table id="cart-table">
                        <thead>
                            <tr>
                                <th>
                                    Item
                                </th>
                                <th>
                                    Cant.
                                </th>
                                <th>
                                    Precio Un.
                                </th>
                                <th>
                                    Precio Tot.
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                return (<tr key={item.id}>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.amount}
                                    </td>
                                    <td>
                                        ${item.price}
                                    </td>
                                    <td>
                                        ${item.price * item.amount}
                                    </td>
                                    <td className="remove-item" onClick={() => removeItem(item.id)}>
                                        <img src={removeItemIcon} alt="Eliminar item" />
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div>
                        Subtotal: ${getTotalPrice()}
                    </div>
                    <div>
                        <button className="cart-button" onClick={() => clear()}>
                            Vaciar carrito
                        </button>
                        <button className="cart-button" disabled>
                            Terminar compra
                        </button>
                    </div>
                </>
                :
                <>
                    <h2>
                        No hay items en el carrito :(
                    </h2>

                    <Link to="/">
                        <button className="cart-button">
                            Volver al inicio
                        </button>
                    </Link>

                </>
            }

        </div>
    )
};

export default Cart;