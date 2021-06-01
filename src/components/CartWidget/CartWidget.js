import './CartWidget.css';
import cart from '../../assets/icons/cart-outline.svg'

function CartWidget() {
    return (
        <div>
             <img className="cart-icon" alt="" src={cart} />
        </div>
    )
}

export default CartWidget