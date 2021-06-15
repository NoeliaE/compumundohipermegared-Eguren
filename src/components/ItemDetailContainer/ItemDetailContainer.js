import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const itemData = {
        id: "AA00",
        title: "Producto1",
        description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas consectetur.",
        price: 500,
        pictureUrl: 'https://via.placeholder.com/300x200?text=ImagePlaceholder',
        stock: 0
    }


    const getItems  = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemData);
            }, 2000);

        })
    }
    const [item, setItem] = useState({});
    useEffect(() => {
        getItems().then(response => {
            setItem(response);
        })
    }, [])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;