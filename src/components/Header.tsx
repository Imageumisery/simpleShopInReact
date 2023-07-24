import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
                <div className="shopping-cart-icon">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </nav>
        </div>
    );
};

export default Header;
