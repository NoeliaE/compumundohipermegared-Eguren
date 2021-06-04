import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Main() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Vamos a probar el contador:" />
    </div>
  );
}

export default Main;
