import './Main.css';
import NavBar  from '../NavBar/NavBar';
import ItemListContainer  from '../ItemListContainer/ItemListContainer';


function Main() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Aún no hay productos para ver :("/>
    </div>
  );
}

export default Main;
