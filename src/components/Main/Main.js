import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


function Main() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Nuestros productos:" />
      <ItemDetailContainer />
    </div>
  );
}

export default Main;
