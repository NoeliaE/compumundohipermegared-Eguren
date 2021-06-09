import './Item.css';
const Item = ({ item }) => {
    const { title, pictureUrl, price, description } = item;
    return (
        <div className="product">
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
        </div>
    )
}

export default Item;