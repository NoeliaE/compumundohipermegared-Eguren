import './NavBar.css';
import logo from '../../assets/images/cmhmr-logo.svg';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <nav>
            <div className="nav-container">
                <a className="nav-logo-container" href="#home">
                    <img className="nav-logo-img" alt="compumundohipermegared" src={logo} />
                </a>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#products">PRODUCTOS</a></li>
                    <li><a href="#contact-us">CONTACTO</a></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;