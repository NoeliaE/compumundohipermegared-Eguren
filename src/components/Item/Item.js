import './Item.css';
import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    const { title, pictureUrl, price, description, id } = item;
    return (
        <div className="product">
            <Link to={`/item/${id}`}>
                <img alt={title} src={pictureUrl} />
                <div className="item-title">
                    <h3>
                        {title}
                    </h3>
                    <span className="item-price">
                        {typeof price == 'number' ? `$${price}` : '-'}
                    </span>
                </div>
                <p className="item-description">
                    {description}
                </p>
            </Link>
        </div>
    )
}

export default Item;