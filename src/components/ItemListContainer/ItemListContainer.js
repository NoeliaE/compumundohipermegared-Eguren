import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemListContainer = ({ greeting }) => {
    const onAdd = (amount) => {
        alert(`Agregaste ${amount} ${amount === 1 ? 'producto' : 'productos'}`)
    }

    return (
        <div className="item-list-container">
            <div>
                {greeting}
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer