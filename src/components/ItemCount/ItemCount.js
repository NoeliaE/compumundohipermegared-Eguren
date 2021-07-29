import React, { useState } from 'react';
import './ItemCount.css';
import add from '../../assets/icons/add-circle-outline.svg'
import remove from '../../assets/icons/remove-circle-outline.svg'


function ItemCount(
    { stock, initial, onAdd }
) {

    const [items, setItem] = useState(initial);

    const addItem = () => {
        items < stock && setItem(items + 1);
    }

    const removeItem = () => {
        items > 1 && setItem(items - 1);
    }

    return (
        <div>
            <p className="stock-indicator">Stock: {stock}</p>
            <div className="count-buttons-controller">
                <div className="item-count-controller">
                    <img src={remove} className="change-total" onClick={() => removeItem()} alt="" />
                    <span>{items}</span>
                    <img src={add} className="change-total" onClick={() => addItem()} alt="" />
                </div>
                <button className="add-to-cart" disabled={stock === 0 ? true : false} onClick={() => stock > 0 && onAdd(items)}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;