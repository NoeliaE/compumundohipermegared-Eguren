import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase';
const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState({});
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items").doc(id);
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("El item no existe");
            }
            setItem({ ...querySnapshot.data(), id: id });
        }).catch((error) => {
            console.log("Algo salió mal", error);
        })
    }, [])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;