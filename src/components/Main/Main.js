import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Main() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Nuestros productos:" />
    </div>
  );
}

export default Main;
