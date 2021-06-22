import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let itemList = [
                    {
                        id: "AA00",
                        title: "Manteca en barra",
                        description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas consectetur.",
                        price: 500,
                        pictureUrl: 'https://i.ibb.co/3zcp9cZ/butter.jpg',
                        category: "alimentos",
                        stock : 10
                    },
                    {
                        id: "AA02",
                        title: "Estencil para labial",
                        description: "Morbi et venenatis purus. Fusce est tellus, maximus in elit sed, egestas tincidunt sem. Nullam.",
                        price: 1270,
                        pictureUrl: 'https://i.ibb.co/60t5j2B/stencil.jpg',
                        category: "fashion",
                        stock : 3
                    },
                    {
                        id: "AB02",
                        title: "Paraguas de zapatos",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nibh interdum, dignissim arcu quis.",
                        price: 3555,
                        pictureUrl: 'https://i.ibb.co/XW62WZ6/umbrella.jpg',
                        category: "fashion",
                        stock : 5
                    }
                ]

                const itemData = itemList.find((item) => item.id === id);
                resolve(itemData);
            }, 1000);

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