import './Main.css';
import CartProvider from '../../providers/CartProvider';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function Main() {
  return (
    // <div className="App">
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Nuestros productos:" />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer greeting="Nuestros productos:" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
    // </div>
  );
}

export default Main;
