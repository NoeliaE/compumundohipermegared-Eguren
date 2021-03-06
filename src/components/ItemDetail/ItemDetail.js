import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';
const ItemDetail = ({ item }
) => {
    const [itemCount, setItemCount] = useState(0);
    const { addItem, isInCart } = useContext(CartContext);

    useEffect(() => {
        let isInCartItem = isInCart(item.id);
        isInCartItem !== undefined && setItemCount(isInCartItem.amount);
    }, [item])

    const onAdd = (amount) => {
        setItemCount(amount);
        addItem(item, amount);
    }

    return (
        item.title ?
            <div className="item-detail">
                <h1>{item.title}</h1>
                <div className="item-info" >
                    <img src={item.pictureUrl} alt={`${item.title}`} />
                    <div style={{ marginLeft: '3em', position: 'relative' }}>
                        <p className="item-price">
                            {item.price && `$${item.price}`}
                        </p>
                        <p className="item-description">
                            {item.description}
                        </p>
                        <div style={{ position: 'absolute', bottom: 0 }}>
                            {itemCount === 0 ?
                                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                                :
                                <Link to="/cart">
                                    <button className="go-to-cart">Terminar compra</button>
                                </Link>
                            }
                        </div>
                    </div>

                </div>
            </div> :

            <h2 className="loading">Cargando</h2>

    )
}

export default ItemDetail;