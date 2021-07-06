import './CartWidget.css';
import cart from '../../assets/icons/cart-outline.svg';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

function CartWidget() {

    const { getTotalItems } = useContext(CartContext);

    return (
        <div className="cart-widget-container">
            <img className="cart-icon" alt="" src={cart} />
            {
                getTotalItems() > 0 &&
                <span className='cart-badge'> {getTotalItems()} </span>
            }
        </div>
    )
}

export default CartWidget