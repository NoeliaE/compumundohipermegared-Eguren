import './NavBar.css';
import logo from '../../assets/images/cmhmr-logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


function NavBar() {
    const [categories, setCategories] = useState([]);

    const getCategories = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: "fashion", name: "fashion" },
                { id: "alimentos", name: "alimentos" }
            ])
        }, 100);
    })

    useEffect(() => {
        getCategories.then(
            result => {
                setCategories(result);
            }
        )
    }, []);

    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/" className="nav-logo-container">
                    <img className="nav-logo-img" alt="compumundohipermegared" src={logo} />
                </NavLink>
                <ul className="main-menu">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li className="dropdown-parent"><span>CATEGORÍAS</span>
                        <ul className="dropdown-menu">
                            {categories.map((category) => {
                                return (<li key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                            })}
                        </ul>
                    </li>
                </ul>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;