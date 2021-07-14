import './Cart.css';
import removeItemIcon from '../../assets/icons/close-outline.svg';
import CartContext from '../../context/CartContext';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase';
import firebase from 'firebase/app';
// import 'firebase/firestore';

const Cart = () => {
    const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext);

    const [cartMessage, setCartMessage] = useState('No hay items en el carrito :(')
    const [validate, setValidate] = useState({
        name: undefined,
        mail: undefined,
        phone: undefined,
        isValid: true
    })


    const updateName = (e) => {
        let value = e.target.value;
        if (value === "")  value = undefined;
        setValidate(prevState => ({
            ...prevState,
            name: value
        }))
    }
    const updateMail = (e) => {
        let value = e.target.value;
        if (value === "")  value = undefined;
        setValidate(prevState => ({
            ...prevState,
            mail: value
        }))
    }
    const updatePhone = (e) => {
        let value = e.target.value;
        if (value === "")  value = undefined;
        setValidate(prevState => ({
            ...prevState,
            phone: value
        }))
    }
    const sendOrder = (event) => {
        event.preventDefault();
        const { name, mail, phone, isValid } = validate;
        if (name != undefined && mail != undefined && phone != undefined) {
            const db = getFirestore();
            const orders = db.collection("orders");
            const newOrder = {
                buyer: { name: name, mail: mail, phone: phone },
                items: cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: getTotalPrice()
            }
            orders.add(newOrder).then(({ id }) => {
                setCartMessage(`Pedido registrado. Su id: ${id}`);
                clear();
            }).catch(error => {
                alert("Su pedido no pudo ser registrado")
            })
        } else {
            setValidate(prevState => ({ ...prevState, isValid: false }))
        }
    }
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
                        Subtotal: <span className="total-cart-price">${getTotalPrice()}</span>
                    </div>

                    <div>
                        <h3>
                            Tus datos:
                        </h3>
                        <form onSubmit={(ev) => sendOrder(ev)}>
                            <label htmlFor="fname">Nombre*:</label><br />
                            <input className={validate.name != undefined || validate.isValid === true ? 'valid' : 'invalid'} type="text" id="fname" name="fname" onChange={(e) => updateName(e)} /><br />
                            <label htmlFor="fmail">Mail*:</label><br />
                            <input className={validate.mail != undefined || validate.isValid === true ? 'valid' : 'invalid'} type="text" id="fmail" name="fmail" onChange={(e) => updateMail(e)} /><br />
                            <label htmlFor="fname">Teléfono*:</label><br />
                            <input className={validate.phone != undefined || validate.isValid === true ? 'valid' : 'invalid'} type="number" id="fphone" name="fphone" onChange={(e) => updatePhone(e)} /><br />

                            <p>* campos obligatorios</p>
                            <div>
                                <button className="cart-button" onClick={() => clear()}>
                                    Vaciar carrito
                                </button>
                                <button type="submit" className="cart-button" >
                                    Terminar compra
                                </button>
                            </div>


                        </form>
                    </div>
                    <div>


                    </div>

                </>
                :
                <>
                    <h2>
                        {cartMessage}
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