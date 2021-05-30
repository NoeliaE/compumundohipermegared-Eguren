import './NavBar.css';
import logo from '../../assets/images/cmhmr-logo.svg';

function NavBar() {
    return (
        <nav>
            <div className="nav-container">
                <a href="#home">
                <img className="nav-logo-img" alt="compumundohipermegared" src={logo} />
                </a>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#products">PRODUCTOS</a></li>
                    <li><a href="#contact-us">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;