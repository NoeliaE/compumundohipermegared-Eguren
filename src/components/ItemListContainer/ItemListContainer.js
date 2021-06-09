import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
const ItemListContainer = ({ greeting }) => {
    // const onAdd = (amount) => {
    //     alert(`Agregaste ${amount} ${amount === 1 ? 'producto' : 'productos'}`)
    // }
    const [items,setItems] = useState([]);
    useEffect(()=>{
        setTimeout(() => {
            setItems([
                {
                    id: "AA00",
                    title: "Producto1",
                    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas consectetur.",
                    price: 500,
                    pictureUrl: 'https://via.placeholder.com/300x200?text=ImagePlaceholder'
                },
                {
                    id: "AA02",
                    title: "Producto2",
                    description: "Morbi et venenatis purus. Fusce est tellus, maximus in elit sed, egestas tincidunt sem. Nullam.",
                    price: 1270,
                    pictureUrl: 'https://via.placeholder.com/300x200?text=ImagePlaceholder'
                },
                {
                    id: "AB02",
                    title: "Producto3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nibh interdum, dignissim arcu quis.",
                    price: 3555,
                    pictureUrl: 'https://via.placeholder.com/300x200?text=ImagePlaceholder'
                }
            ])
        }, 2000);
    },[])

    return (
        <div className="item-list-container">
            <h1>
                {greeting}
            </h1>
            <ItemList items={items} />
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}
        </div>
    )
}

export default ItemListContainer;