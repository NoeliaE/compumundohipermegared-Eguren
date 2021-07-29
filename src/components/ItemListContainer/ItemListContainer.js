import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase';
const ItemListContainer = ({ greeting }) => {

    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = id === undefined ? db.collection("items") : db.collection("items").where('category', '==', id);
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No hay items para mostrar");
            }
            setItems(querySnapshot.docs.map(doc => { return ({ ...doc.data(), id: doc.id }) }));
        }).catch((error) => {
            console.log("Algo salió mal", error);
        }).finally(() => {
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="item-list-container">
            <h1>
                {greeting}
            </h1>
            {loading ?
                <h2>Cargando</h2> :
                <ItemList items={items} />
            }
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}
        </div>
    )
}

export default ItemListContainer;