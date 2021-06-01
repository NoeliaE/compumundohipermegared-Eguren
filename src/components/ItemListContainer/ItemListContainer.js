import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            {greeting}
        </div>
    )
}

export default ItemListContainer