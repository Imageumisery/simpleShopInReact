import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="header">
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="/products" className="nav-link">
                            products
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            about
                        </a>
                    </li>
                </ul>
                <img src="/logo-black.svg" alt="" className="nav-logo" />
                <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart-icon"/>
            </nav>
        </div>
    );
};

export default Header;
