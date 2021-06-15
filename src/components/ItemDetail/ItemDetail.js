import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item }
) => {
    return (
        item.title ?
            <div className="item-detail">
                <h1>{item.title}</h1>
                <div className="item-info" style={{}}>
                    <img src={item.pictureUrl} />
                    <div style={{ marginLeft: '3em' }}>
                        <p className="item-price">
                            {item.price && `$${item.price}`}
                        </p>
                        <p className="item-description">
                            {item.description}
                        </p>
                        <ItemCount initial={1} stock={item.stock} />
                    </div>

                </div>
            </div> :
            <div className="loading">
                Cargando
            </div>
    )
}

export default ItemDetail;